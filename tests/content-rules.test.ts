import { test } from 'node:test';
import assert from 'node:assert/strict';
import { selectPublicEntries } from '../src/lib/content-rules.ts';
import { pathFor } from '../src/lib/i18n.ts';

function entry(locale: 'en' | 'zh', draft = false, key = 'project', slug = 'project') {
  return { data: { locale, slug, translationKey: key, draft } };
}

test('both translations of a ready entry are public', () => {
  const entries = [entry('en'), entry('zh')];
  assert.deepEqual(selectPublicEntries(entries), entries);
});

test('an unfinished translation keeps the entire pair private', () => {
  assert.deepEqual(selectPublicEntries([entry('en'), entry('zh', true)]), []);
});

test('a standalone draft stays private without requiring a translation', () => {
  assert.deepEqual(selectPublicEntries([entry('en', true)]), []);
});

test('publishing without a counterpart fails rather than making a broken switch link', () => {
  assert.throws(() => selectPublicEntries([entry('en')]), /Missing English or Chinese translation/);
});

test('same-language routes cannot silently collide', () => {
  assert.throws(() => selectPublicEntries([entry('en'), entry('en', true, 'different')]), /Duplicate content route/);
});

test('translation keys are unique within a language, even with different slugs', () => {
  assert.throws(() => selectPublicEntries([entry('en'), entry('en', true, 'project', 'different')]), /Duplicate translation/);
});

test('language prefixes and section fragments keep their correct positions', () => {
  assert.equal(pathFor('en', 'about#experience'), '/about/#experience');
  assert.equal(pathFor('zh', '/projects/march-7th/'), '/zh/projects/march-7th/');
  assert.equal(pathFor('zh'), '/zh/');
});
