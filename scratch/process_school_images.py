from PIL import Image
import os

img_path = r'C:/Users/sedya/.gemini/antigravity/brain/19a11326-611f-433b-baf9-9f96579a0cb3/.user_uploaded/media_1790585154233.jpg'
img = Image.open(img_path)
w, h = img.size
print(f"Original size: {w} x {h}")

# The crest is on the top-left:
# Let's inspect coordinates:
# Crest is approximately: x from 100 to 410, y from 25 to 330
# Let's crop a square around the crest with padding
crest_box = (110, 20, 400, 310)
crest = img.crop(crest_box)
print(f"Crest cropped: {crest.size}")

# Full brand header (crest + "Carepoint Community School")
# x: 100 to 920, y: 20 to 340
brand_box = (90, 15, 920, 335)
brand = img.crop(brand_box)
print(f"Brand banner cropped: {brand.size}")

# Save to destination folders
target_dirs = [
    r'c:/Projects/Carepoint_ApexEducators/prototype/assets',
    r'c:/Projects/Carepoint_ApexEducators/prototype/images',
    r'c:/Projects/Carepoint_ApexEducators/prototype/public/assets',
    r'c:/Projects/Carepoint_ApexEducators/prototype/public/images',
    r'c:/Projects/Carepoint_ApexEducators/prototype'
]

for d in target_dirs:
    os.makedirs(d, exist_ok=True)
    # Save full school profile image
    img.save(os.path.join(d, 'carepoint-school-profile.jpg'), quality=95)
    # Save circular crest crop
    crest.save(os.path.join(d, 'carepoint-crest.png'))
    crest.save(os.path.join(d, 'carepoint-crest.jpg'), quality=95)
    # Save brand banner
    brand.save(os.path.join(d, 'carepoint-brand-banner.jpg'), quality=95)

print("All assets successfully generated across directories!")
