const stripBrackets = require('./index.js');

test('strips brackets', () => {
  expect(stripBrackets()('[[a],[b]]')).toBe('a,b');
  expect(stripBrackets()('[[a,b]]')).toBe('a,b');
  expect(stripBrackets()('[a,b]')).toBe('a,b');
});

test('strips parens', () => {
  expect(stripBrackets('(', ')', [','])('((a),(b))')).toBe('a,b');
  expect(stripBrackets('(', ')', [','])('((a,b))')).toBe('a,b');
  expect(stripBrackets('(', ')', [','])('(a,b)')).toBe('a,b');
});
