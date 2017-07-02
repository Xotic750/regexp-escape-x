'use strict';

var regexpEscape;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  regexpEscape = require('../../index.js');
} else {
  regexpEscape = returnExports;
}

describe('regexpEscape', function () {
  it('simple strings', function () {
    var strings = [
      'The Quick Brown Fox',
      'hello there',
      ''
    ];
    strings.forEach(function (str) {
      expect(regexpEscape(str)).toBe(
        str,
        JSON.stringify(str) + ' regexpEscapes to itself.'
      );
    });
  });

  it('strings that need escaping', function () {
    expect(regexpEscape('hi. how are you?')).toBe('hi\\. how are you\\?');
    var syntaxCharacters = '^$\\.*+?()[]{}|';
    expect(regexpEscape(syntaxCharacters).length)
      .toBe(syntaxCharacters.length * 2);
    expect(regexpEscape('\uD834\uDF06.')).toBe('\uD834\uDF06\\.');
  });

  it('non-strings', function () {
    var strings = [
      'hello there',
      '^$\\.*+?()[]{}|',
      '\uD834\uDF06.'
    ];
    strings.forEach(function (str) {
      expect(regexpEscape({
        toString: function () {
          return str;
        }
      })).toBe(regexpEscape(str));
    });
  });
});
