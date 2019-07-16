import regexpEscape from 'src/regexp-escape-x';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('regexpEscape', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof regexpEscape).toBe('function');
  });

  it('should throw when target is null or undefined', function() {
    expect.assertions(3);
    expect(function() {
      regexpEscape();
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      regexpEscape(void 0);
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      regexpEscape(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('simple strings', function() {
    expect.assertions(3);
    const strings = ['The Quick Brown Fox', 'hello there', ''];

    strings.forEach(function(str) {
      expect(regexpEscape(str)).toBe(str, `${JSON.stringify(str)} regexpEscapes to itself.`);
    });
  });

  it('strings that need escaping', function() {
    expect.assertions(3);
    expect(regexpEscape('hi. how are you?')).toBe('hi\\. how are you\\?');
    const syntaxCharacters = '^$\\.*+?()[]{}|';
    expect(regexpEscape(syntaxCharacters)).toHaveLength(syntaxCharacters.length * 2);
    expect(regexpEscape('\uD834\uDF06.')).toBe('\uD834\uDF06\\.');
  });

  it('non-strings', function() {
    expect.assertions(3);
    const strings = ['hello there', '^$\\.*+?()[]{}|', '\uD834\uDF06.'];

    strings.forEach(function(str) {
      expect(
        regexpEscape({
          toString() {
            return str;
          },
        }),
      ).toBe(regexpEscape(str));
    });
  });

  it('should return a string for everything', function() {
    expect.assertions(1);
    const values = [true, 'abc', 1, [], /r/];

    const expected = values.map(String);
    const actual = values.map(regexpEscape);
    expect(actual).toStrictEqual(expected);
  });

  it('should throw for Object.create(null)', function() {
    expect.assertions(1);
    expect(function() {
      regexpEscape(Object.create(null));
    }).toThrowErrorMatchingSnapshot();
  });

  ifSymbolIt('should throw for Symbol', function() {
    expect.assertions(2);

    const sym = Symbol('foo');
    expect(function() {
      regexpEscape(sym);
    }).toThrowErrorMatchingSnapshot();

    const symObj = Object(sym);
    expect(function() {
      regexpEscape(Object(symObj));
    }).toThrowErrorMatchingSnapshot();
  });
});
