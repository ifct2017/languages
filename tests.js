const assert = require('assert');
const languages = require('./');




function testAll() {
  var a = languages('mal.');
  var b = languages('Mal');
  var c = {abbr: 'Mal.', lang: 'Malayalam'};
  assert.deepStrictEqual(a, c);
  assert.deepStrictEqual(b, c);

  var a = languages('what is s.?');
  var b = languages('S. stands for?');
  var c = {abbr: 'S.', lang: 'Sanskrit'};
  assert.deepStrictEqual(a, c);
  assert.deepStrictEqual(b, c);
}
testAll();
