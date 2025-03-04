const fs = require("fs").promises;
const path = require("path");
const { json } = require("stream/consumers");
// let imgAddress = [];
// let counter = 0;

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

      // await fs.appendFile("allPhotosinDir.json", allPhotosinDirinJSON);

      // for (img of allPhotosinDir) {
      //   imgAddress[counter] = `${pathToDir}\\${dir}\\${img}`;
      //   counter++;
      // }
    }

    // const imgaddressesJSON = JSON.stringify(imgAddress);
    // await fs.writeFile("imgaddressesJSON.json", imgaddressesJSON);
  } catch (err) {
    console.log(err);
    // return createListDir();
  }
}

createListDir();
