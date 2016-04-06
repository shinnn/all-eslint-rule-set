import test from 'ava';
import arrayDifference from 'array-difference';
import allEslintRules from 'all-eslint-rules';
import allEslintRuleSet from '.';

test('Exposes a Set.', t => {
  t.true(allEslintRuleSet instanceof global.Set);
});

test('Includes all the ESLint rules.', t => {
  t.deepEqual(arrayDifference(Array.from(allEslintRuleSet), allEslintRules), []);
});
