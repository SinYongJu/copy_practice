// FE.vote exports
(function(exports){

  function vote(){
    
    return {
      init:function(key){
        console.log('key', key);
      }
    }
  }

  exports.vote = exports.vote ? exports.vote : vote;
})(FE || {});