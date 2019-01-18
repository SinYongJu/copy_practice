const fs = require('fs');
const path = require('path');
const dateFormat = require('dateformat');

function getDate() {
  const now = new Date();
  return `${dateFormat(now, 'yyyymmdd')}`;
}

function createDir(rootPath, dirname) {
  const dirPath = path.join(rootPath, dirname);
  if (fs.existsSync(dirPath)) return;
  fs.mkdirSync(dirPath);
}

function createFile(dirPath, filename, content) {
  const filePath = path.join(dirPath, filename);
  const fileContent = content || '';
  if (fs.existsSync(filePath)) return;
  fs.writeFileSync(filePath, fileContent);
}

function replaceAll(str, asis, tobe) {
  const regex = new RegExp(asis, 'g');
  return str.replace(regex, tobe);
}

function getArg(name) {
  const property = `${name}=`;
  const args = process.argv.filter((arg) => (arg.indexOf(property) > -1));
  return args.length > 0 ? args[0].replace(property, '') : false;
}

module.exports = { getDate, getArg, createDir, createFile, replaceAll };