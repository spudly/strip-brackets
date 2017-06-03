# strip-brackets

Strips unecessary brackets

[![Greenkeeper badge](https://badges.greenkeeper.io/spudly/strip-brackets.svg)](https://greenkeeper.io/)

## Usage

Pass it some configuration parameters and it will give you a new function that strips all unnecessary brackets.

### Function Signature
```js
stripBrackets(openChar = '[', closeChar = ']', joinChars = [',']) => input => output
```

```js
import stripBrackets from 'strip-brackets';

const stripSquareBrackets = stripBrackets('[', ']', [',']);
stripSquareBrackets('[[a,b],[c],[[d]]]'); // => "[a,b],c,d"

const stripParens = stripBrackets('(', ')', [',']);
stripParens('((a,b),(c),((d)))'); // => "(a,b),c,d"
```

### Parameters

<dl>
  <dt>openChar</dt>
  <dd>The opening bracket. Default: `[`

  <dt>closeChar</dt>
  <dd>The closing bracket. Default: `]`

  <dt>joinChars</dt>
  <dd>Characters that indicate that the current part of the string should be wrapped in brackets. Default: `[","]`

  <dt>input</dt>
  <dd>The string you want to strip brackets from</dd>

  <dt>output<dt>
  <dd>The resulting string, with unnecessary brackets removed</dd>
</dl>
