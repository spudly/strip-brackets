# strip-brackets

[![Greenkeeper badge](https://badges.greenkeeper.io/spudly/strip-brackets.svg)](https://greenkeeper.io/)

Strips unecessary brackets

## Usage

```js
const stripBrackets = require('strip-brackets');

const stripParens = stripBrackets('(', ')', [',']);

stripParens('((a,b),(c),((d)))'); // => "(a,b),c,d"
```
