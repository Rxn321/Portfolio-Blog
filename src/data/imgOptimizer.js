import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./public/posts";
const outputDir = "./public/posts/optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();

  if (![".jpg", ".jpeg", ".png"].includes(ext)) {
    continue;
  }

  const name = path.basename(file, ext);
  const input = path.join(inputDir, file);

  // Gallery thumbnail
  await sharp(input)
    .resize(400, 400, {
      fit: "cover",
    })
    .webp({
      quality: 50,
    })
    .toFile(
      path.join(outputDir, `${name}-thumb.webp`)
    );
    
  console.log(`Optimized: ${file}`);
}