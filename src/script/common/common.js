// FE.common exports
(function(exports){

  function common(){
    console.log('common');
    return {
      init:function(){
        console.log('init');
      },
      bindEvents:function(){
        console.log('bindEvents');
      }
    }
  }

  exports.common = exports.common ? exports.common : common;
})(FE || {});