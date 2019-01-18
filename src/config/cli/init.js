const util = require('../util');
const fs = require('fs');
const path = require('path');
const FILENAME = 'project.json';

async function init() {
  const rootPath = path.join(__dirname, '..', '..', '..');
  const formatPath = path.join(__dirname, '..', 'format');
  const format = fs.readFileSync(path.join(formatPath, FILENAME), 'utf-8');
  await util.createFile(rootPath, FILENAME, format);
}

init();