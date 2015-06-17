var assert = require('assert');
var encoder64 = require('../');

var tests = [
  {
    "dummy": "http://encoder64.io#hash",
    "hash": "aHR0cDovL2VuY29kZXI2NC5pbyNoYXNo",
    "name": "with hashes"
  },
  {
    "dummy": "http://encoder64.io?foo=bar&fooz=baz",
    "hash": "aHR0cDovL2VuY29kZXI2NC5pbz9mb289YmFyJmZvb3o9YmF6",
    "name": "with queries"
  },
  {
    "dummy": "http://encoder64.io/foo/bar/fooz/",
    "hash": "aHR0cDovL2VuY29kZXI2NC5pby9mb28vYmFyL2Zvb3ov",
    "name": "with multiple paths"
  },
  {
    "dummy": "http://encoder64.io:1337/@foo#b$ar?fooz=b;az&f+o+o=b,az/",
    "hash": "aHR0cDovL2VuY29kZXI2NC5pbzoxMzM3L0Bmb28jYiRhcj9mb296PWI7YXomZitvK289Yixhei8~",
    "name": "with reserved characters"
  },
  {
    "dummy": 'http://encoder64.io/~[foo]#feel`g´ood?fo<o>="bar"&fo{o}z=%b|a^r%',
    "hash": "aHR0cDovL2VuY29kZXI2NC5pby9-W2Zvb10jZmVlbGBnwrRvb2Q_Zm88bz49ImJhciImZm97b316PSVifGFeciU~",
    "name": "with unsafe characters"
  }
];

describe('Test all the casuistics', function(){
  
  tests.map(function(each){
    describe('For urls ' + each.name, function(){
      
      it('should encode', function(){
        assert.equal(encoder64.encode(each.dummy), each.hash);
      });

      it('and decode', function(){
        assert.equal(encoder64.decode(each.hash), each.dummy);
      });

    });
  });

});
