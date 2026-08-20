import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./photos";
const outputDir = "./public/posts/photos";
const thumbnailDir = "./public/posts/optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

if (!fs.existsSync(thumbnailDir)) {
  fs.mkdirSync(thumbnailDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();

  if (![".jpg", ".jpeg", ".png", ".heic", ".heif"].includes(ext)) {
    continue;
  }

const name = path.parse(file).name;
const input = path.join(inputDir, file);

  try {
    // Full WebP image
    await sharp(input)
      .webp({
        quality: 100,
      })
      .toFile(
        path.join(outputDir, `${name}.webp`)
      );

    // Gallery thumbnail
    await sharp(input)
      .resize(400, 400, {
        fit: "cover",
      })
      .webp({
        quality: 50,
      })
      .toFile(
        path.join(thumbnailDir, `${name}-thumb.webp`)
      );

    console.log(`✓ Converted: ${file}`);
  } catch (error) {
    console.error(`✗ Failed: ${file}`);
    console.error(error.message);
  }
}