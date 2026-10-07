import { test } from 'node:test';
import assert from 'node:assert/strict';
import { coursework, assertPublicCoursework } from '../src/data/coursework.ts';

test('public course records contain only the approved fields', () => {
  assert.doesNotThrow(() => assertPublicCoursework(coursework));
  assert.equal(coursework.flatMap((semester) => semester.courses).length, 37);
});

test('a sensitive field cannot be merged into a course record', () => {
  const fixture = [{ ...coursework[0], courses: [{ ...coursework[0].courses[0], score: '__PRIVATE_FIELD__' }] }];
  assert.throws(() => assertPublicCoursework(fixture), /Unexpected field/);
});

test('a sensitive field cannot be attached to a semester record', () => {
  const fixture = [{ ...coursework[0], gpa: '__PRIVATE_FIELD__' }];
  assert.throws(() => assertPublicCoursework(fixture), /Unexpected field/);
});

test('each course has one bilingual identity within a semester', () => {
  const fixture = [{ ...coursework[0], courses: [coursework[0].courses[0], coursework[0].courses[0]] }];
  assert.throws(() => assertPublicCoursework(fixture), /Duplicate coursework/);
});

test('current selection preserves the six courses in the current term', () => {
  const current = coursework.filter((semester) => semester.current);
  assert.equal(current.length, 1);
  assert.deepEqual(current[0].courses.map((course) => course.code), ['CS250', 'CS340', 'CS341', 'CS370', 'CS371', 'CS440']);
});
