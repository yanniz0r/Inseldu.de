const { readdirSync, writeFileSync } = require("fs");
const { join } = require("path");

const galleryPath = join(__dirname, "..", "public", "images", "gallery");
const galleryMapPath = join(__dirname, "..", "data", "gallery-data.json");

const galleryDirectory = readdirSync(galleryPath);

const galleryMap = galleryDirectory.map(file => ({
    url: `/images/gallery/${encodeURI(file)}`,
    description: file.replace(/\..+/g, "")
}));

writeFileSync(galleryMapPath, JSON.stringify(galleryMap));