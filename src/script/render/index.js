const fs = require('fs');
const path = require('path');

function getMeta(){
return ``;
}

function getCDN(){
return `<script src="https://cdnjs.cloudflare.com/ajax/libs/jsrender/1.0.1/jsrender.min.js"></script>`;
}

function getJS(type){
  if(!(type === 'mo' || type === 'pc' || type === 'app')) return;

  const filename = `render.js`;

  return fs.readFileSync(path.join(__dirname, filename), 'utf-8');
}

module.exports = (templateType) => {
  return {
    meta: getMeta(),
    cdn: getCDN(),
    func: getJS(templateType)
  };
};

