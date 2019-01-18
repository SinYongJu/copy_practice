const fs = require('fs');
const path = require('path');
const viewPath = path.join(__dirname, '..', '..', 'view');
const util = require('../util');
const env = util.getArg('env');
const dirname = util.getArg('dir');

function getFileData(filePath) {
  if (!fs.existsSync(filePath)) return console.log(`Not found ${filePath}`);
  return fs.readFileSync(filePath, 'utf-8');
}

function getReplaceFileData(env, fileData, images) {
  let replacedFileData = ''; 
  images.forEach((img) => {
    if (!(img.title && img.hashId)) return;

    if (env === 'DEV') {
      replacedFileData = util.replaceAll(fileData, img.hashId, img.title);
    }
    if (env === 'PUB') {
      replacedFileData = util.replaceAll(fileData, img.title, img.hashId);
    }
  });
  return replacedFileData;
}

async function init() {
  if (!(env === 'DEV' || env === 'PUB')) return console.log('Need env property Or Not supported env type (DEV, PUB)');

  const dirPath = path.join(viewPath, dirname);
  if (!fs.existsSync(dirPath)) return console.log('Need dir property Or Can not fild directory');

  const configPath = path.join(dirPath, '_config.json');
  const appPath = path.join(dirPath, 'app.html');
  const moPath = path.join(dirPath, 'mo.html');
  const pcPath = path.join(dirPath, 'pc.html');
  const config = JSON.parse(getFileData(configPath));
  const images = config.images || [];
  const appFileData = getFileData(appPath);
  const moFileData = getFileData(moPath);
  const pcFileData = getFileData(pcPath);

  await fs.writeFileSync(appPath, getReplaceFileData(env, appFileData, images));
  await fs.writeFileSync(moPath, getReplaceFileData(env, moFileData, images));
  await fs.writeFileSync(pcPath, getReplaceFileData(env, pcFileData, images));
}

init();
