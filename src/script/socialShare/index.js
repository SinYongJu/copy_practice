const fs = require('fs');
const path = require('path');

function getMeta(){
return `
<meta property="og:type" content="website" />
<meta property="og:site_name" content="카카오페이지" />
<meta property="og:locale" content="ko_KR">
<meta property="fb:app_id" content="574884132543436" />
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@kakaopage">
<meta name="twitter:creator" content="@kakaopage">

<!-- social share meta start -->
<meta property="og:title" content="카카오페이지 공유하기 타이틀" />
<meta property="og:description" content="카카오페이지 공유하기 설명" />
<meta property="og:image" content="imgHashId">
<meta property="og:url" content="https://page.kakao.com/store/event/v2/{uid}" />
<meta name="twitter:title" content="카카오페이지 공유하기 타이틀">
<meta name="twitter:description" content="카카오페이지 공유하기 설명" />
<meta name="twitter:image" content="{imgHashId}">
<meta name="twitter:url" content="https://page.kakao.com/store/event/v2/{uid}">
<!-- social share meta end -->`;
}

function getCDN(){
return `
<script src="\${contextPath}/resources/js/clipboard.min.js"></script>
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>`;
}

function getJS(type){
  if(!(type === 'mo' || type === 'pc' || type === 'app')) return;
  
  const filename = `socialShare_${type}.js`;

  return fs.readFileSync(path.join(__dirname, filename), 'utf-8');
}

module.exports = (templateType) => {
  return {
    meta: getMeta(),
    cdn: getCDN(),
    func: getJS(templateType)
  };
};

