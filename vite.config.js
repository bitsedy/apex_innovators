import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Helper to recursively collect all HTML files as multi-page inputs
function getAllHtmlFiles(dir, baseDir = dir) {
  let inputs = {};
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      Object.assign(inputs, getAllHtmlFiles(fullPath, baseDir));
    } else if (entry.name.endsWith('.html')) {
      const relPath = fullPath.substring(baseDir.length + 1).replace(/\\/g, '/');
      const nameKey = relPath.replace(/\.html$/, '').replace(/[\/\\]/g, '_');
      inputs[nameKey] = fullPath;
    }
  }
  return inputs;
}

const baseDir = import.meta.dirname || process.cwd();
const prototypeDir = resolve(baseDir, 'prototype');
const htmlInputs = getAllHtmlFiles(prototypeDir);

// Plugin to support clean extensionless URLs (e.g. /parent/dashboard -> /parent/dashboard.html)
function cleanUrlsPlugin() {
  const handleCleanUrl = (req, res, next) => {
    if (req.url && !req.url.includes('.') && req.url !== '/') {
      const urlPath = req.url.split('?')[0].split('#')[0];
      
      // Remap any legacy /principal routes to /admin
      let normalized = urlPath;
      if (normalized.startsWith('/principal')) {
        normalized = normalized.replace('/principal', '/admin');
      }
      
      const targetHtml = resolve(prototypeDir, normalized.replace(/^\//, '') + '.html');
      if (fs.existsSync(targetHtml)) {
        req.url = req.url.replace(urlPath, normalized + '.html');
      }
    }
    next();
  };

  return {
    name: 'carepoint-clean-urls',
    configureServer(server) {
      server.middlewares.use(handleCleanUrl);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleCleanUrl);
    }
  };
}

export default defineConfig({
  root: prototypeDir,
  css: {
    postcss: false, // Prevents root postcss/tailwind from conflicting with Stitch Tailwind CDN & inline styles
  },
  build: {
    outDir: resolve(baseDir, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: htmlInputs,
    },
  },
  server: {
    port: 3000,
    host: true,
    open: false,
  },
  preview: {
    port: 3000,
    host: true,
  },
  plugins: [
    cleanUrlsPlugin()
  ]
});
