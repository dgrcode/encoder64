var assert = require('assert');
var encoder64 = require('../');

var tests = [
  {
    "dummy": "http://",
    "hash": "aHR0cDovLw~~",
    "name": "http"
  }
];

describe('Test all the protocols', function(){
  
  tests.map(function(each){
    describe('For ' + each.name + ' it', function(){
      
      it('should encode', function(){
        assert.equal(encoder64.encode(each.dummy), each.hash);
      });

      it('and decode', function(){
        assert.equal(encoder64.decode(each.hash), each.dummy);
      });

    });
  });

});
