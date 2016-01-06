'use strict';

const test = require('ava');
const arrayDifference = require('array-difference');
const allEslintRules = require('all-eslint-rules');
const allEslintRuleSet = require('.');

test('Exposes a Set.', t => {
  t.true(allEslintRuleSet instanceof global.Set);
});

test('Includes all the ESLint rules.', t => {
  t.same(arrayDifference(Array.from(allEslintRuleSet), allEslintRules), []);
});
