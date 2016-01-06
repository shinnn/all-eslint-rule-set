# all-eslint-rule-set

[![NPM version](https://img.shields.io/npm/v/all-eslint-rule-set.svg)](https://www.npmjs.com/package/all-eslint-rule-set)
[![Build Status](https://travis-ci.org/shinnn/all-eslint-rule-set.svg?branch=master)](https://travis-ci.org/shinnn/all-eslint-rule-set)
[![Dependency Status](https://david-dm.org/shinnn/all-eslint-rule-set.svg)](https://david-dm.org/shinnn/all-eslint-rule-set)
[![devDependency Status](https://david-dm.org/shinnn/all-eslint-rule-set/dev-status.svg)](https://david-dm.org/shinnn/all-eslint-rule-set#info=devDependencies)

A [set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set) of the all available [ESLint rules](http://eslint.org/docs/rules/)

```javascript
const allEslintRuleSet = require('all-eslint-rule-set');

allEslintRuleSet.has('no-alert'); //=> true
allEslintRuleSet.has('no-array-constructor'); //=> true
allEslintRuleSet.has('no-bitwise'); //=> true
```

## Installation

[Use npm](https://docs.npmjs.com/cli/install).

```
npm install all-eslint-rule-set
```

## API

```javascript
const allEslintRuleSet = require('all-eslint-rule-set');
```

### allEslintRuleSet

Type: `Set` of `String`

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
