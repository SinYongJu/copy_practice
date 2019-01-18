const fs = require('fs');
const path = require('path');

function getMeta(){
return ``;
}

function getCDN(){
return ``;
}

function getJS(type){
  if(!(type === 'mo' || type === 'pc' || type === 'app')) return;
  
  const filename = `vote.js`;

  return fs.readFileSync(path.join(__dirname, filename), 'utf-8');
}

module.exports = (templateType) => {
  return {
    meta: getMeta(),
    cdn: getCDN(),
    func: getJS(templateType)
  };
};

