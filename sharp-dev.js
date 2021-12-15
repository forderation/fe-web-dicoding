const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'src/public/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach(image => {
    const imageFile = image.split('.');
    const fileName = imageFile.slice(0, -1);
    const ext = imageFile.pop();

    if (ext === 'svg') {
      fs.copyFile(`${target}/${image}`, path.resolve(__dirname, `${destination}/${fileName}.${ext}`), (err) => {
        if (err) throw err;
      });
      return;
    }

    sharp(`${target}/${image}`)
      .webp({ quality: 60, reductionEffort: 6 })
      .toFile(path.resolve(__dirname, `${destination}/${fileName}.webp`));

    sharp(`${target}/${image}`)
      .webp({ quality: 40, reductionEffort: 6 })
      .toFile(path.resolve(__dirname, `${destination}/${fileName}-large.webp`));

    sharp(`${target}/${image}`)
      .webp({ quality: 20, reductionEffort: 6 })
      .toFile(path.resolve(__dirname, `${destination}/${fileName}-small.webp`));
  });
