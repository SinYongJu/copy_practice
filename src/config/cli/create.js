const util = require('../util');
const template = require('./template');
const path = require('path');
const project = require('../../../project.json');
const fileName = project.name || "temp"
const dirname = `${util.getDate()}_${fileName}`;

function getTemplateOption(dependencies, defaultOption){
  let opt = defaultOption || {};
  dependencies.map((dependency)=>{
    const getOption = require('../../script/' + dependency);
    if(typeof getOption !== 'function') return;

    const templateOption = getOption(opt.type) || {};
    if(typeof templateOption !== 'object') return;

    Object.entries(templateOption).forEach(([k,v])=>{
      opt[k] = opt[k] ? `${opt[k]}\n${v}\n` : `${v}`;
    });
  })
  return opt;
}

async function init() {
  if (dirname === '') return;
  if (!dirname) return;

  const rootPath = path.join(__dirname, '..', '..', 'view');
  const dirPath = path.join(rootPath, dirname);
  await util.createDir(rootPath, dirname);
  await util.createDir(dirPath, 'image');

  const config = project.config || {}
  const templates = config.templates || [];
  const dependencies = config.dependencies || [];
  if (templates.indexOf('app') > -1) await util.createFile(dirPath, 'app.html', template.getHTML(getTemplateOption(dependencies, { type: 'app' })));
  if (templates.indexOf('mo') > -1)  await util.createFile(dirPath, 'mo.html',  template.getHTML(getTemplateOption(dependencies, { type: 'mo'  })));
  if (templates.indexOf('pc') > -1)  await util.createFile(dirPath, 'pc.html',  template.getHTML(getTemplateOption(dependencies, { type: 'pc'  })));

  await util.createFile(dirPath, 'README.md', template.getREADME());
  await util.createFile(dirPath, '_config.json', JSON.stringify(project, null, 2));
}

init();

