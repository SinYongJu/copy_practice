const path = require('path');
const fs = require('fs');
const formatPath = path.join(__dirname, '..', 'format');

function getHTML(setting) {
  const opts = setting || {};
  const meta = opts.meta || '';
  const type = opts.type || '';
  const style = opts.style || '';
  const cdn = opts.cdn || '';
  const func = opts.func || '';

return `
<head>
${addDefaultMeta().trim()}
${meta.trim()}
<style>
${addReset(type).trim()}
${style.trim()}
</style>
</head>
${addLayout().trim()}
${cdn.trim()}
<script>
${addScript(func)}
</script>`;
}

function getREADME(){
  return fs.readFileSync(path.join(formatPath, 'README.md'), 'utf-8');
}

function addDefaultMeta() {
return `<meta name="author" content="카카오페이지">
<meta name="keywords" content="카카오페이지">
<meta name="description" content="카카오페이지">`;
}

function addReset(type){
  if(!(type === 'mo' || type === 'pc' || type === 'app')) return;
  const filename = `${type === 'app' ? 'mo' : type}.css`;
  return fs.readFileSync(path.join(formatPath, filename), 'utf-8');
}

function addLayout(){
  return fs.readFileSync(path.join(formatPath, 'index.html'), 'utf-8');
}

function addScript(func){
return `$(document).ready(function(){
  'use strict';
  var FE = {};

  ${func}

  //your code here
  
});`;
}

module.exports = { getHTML, getREADME };