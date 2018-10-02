'use strict';
module.exports = function() {


  var secretNumberGenerator = Math.floor(Math.random() * 100000);

  return function(){
    return secretNumberGenerator;
  };

};