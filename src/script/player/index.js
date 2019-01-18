const fs = require('fs');
const path = require('path');

function getMeta(){
return ``;
}

function getCDN(){
return `<script src="https://tv.kakao.com/player/script/sdk/player_api.min.js"></script>`;
}

function getJS(type){
  if(!(type === 'mo' || type === 'pc' || type === 'app')) return;
  
  const filename = `player.js`;

  return fs.readFileSync(path.join(__dirname, filename), 'utf-8');
}

module.exports = (templateType) => {
  return {
    meta: getMeta(),
    cdn: getCDN(),
    func: getJS(templateType)
  };
};

