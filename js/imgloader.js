const fs = require("fs").promises;
const path = require("path");
const { json } = require("stream/consumers");

async function createListDir() {
  try {
    const pathToDir = path.join(__dirname, "../img/projects");
    const allObjectsDir = await fs.readdir(pathToDir);

    const allObjectsDirinJSON = JSON.stringify(allObjectsDir);
    await fs.writeFile(`allObjectsDir.json`, allObjectsDirinJSON);

    for (dir of allObjectsDir) {
      const allPhotosinDir = await fs.readdir(`${pathToDir}/${dir}`);
      const allPhotosinDirinJSON = JSON.stringify(allPhotosinDir);

      await fs.writeFile(`${dir}.json`, allPhotosinDirinJSON);
    }
  } catch (err) {
    console.log(err);
    return createListDir();
  }
}

createListDir();

// import fs from "fs/promises";
// import path from "path";
// import { fileURLToPath } from "url";

// // Определяем __dirname в ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// async function createListDir() {
//   try {
//     const pathToDir = path.join(__dirname, "../img/projects");
//     const jsonDir = path.join(__dirname, "../js"); // Папка для JSON

//     // Проверяем, существует ли папка json, если нет — создаём
//     try {
//       await fs.access(jsonDir);
//     } catch {
//       await fs.mkdir(jsonDir);
//     }

//     const allObjectsDir = await fs.readdir(pathToDir);
//     const allObjectsDirinJSON = JSON.stringify(allObjectsDir, null, 2);
//     await fs.writeFile(
//       path.join(jsonDir, `allObjectsDir.json`),
//       allObjectsDirinJSON
//     );

//     for (let dir of allObjectsDir) {
//       const fullPath = path.join(pathToDir, dir);

//       // Проверяем, является ли элемент папкой
//       const stat = await fs.stat(fullPath);
//       if (!stat.isDirectory()) continue;

//       const allPhotosinDir = await fs.readdir(fullPath);
//       const allPhotosinDirinJSON = JSON.stringify(allPhotosinDir, null, 2);

//       await fs.writeFile(
//         path.join(jsonDir, `${dir}.json`),
//         allPhotosinDirinJSON
//       );
//     }

//     console.log("✅ JSON файлы созданы в /img/projects/json");
//   } catch (err) {
//     console.log("❌ Ошибка:", err);
//   }
// }

// createListDir();
