import test from 'node:test';
import assert from 'node:assert/strict';
import { projects } from '../src/data/projects.ts';
import { getVisibleProjects } from '../src/data/projectFilters.ts';

const show = (category: Parameters<typeof getVisibleProjects>[0]['category'], query = '', sort: Parameters<typeof getVisibleProjects>[0]['sort'] = 'featured') =>
  getVisibleProjects({ projects, category, query, sort });

test('the catalog contains 21 unique records and All returns each exactly once', () => {
  const visible = show('all');
  assert.equal(projects.length, 21);
  assert.equal(visible.length, 21);
  assert.equal(new Set(visible.map(({ id }) => id)).size, 21);
});

test('featured and technical filters match project memberships without duplicate records', () => {
  assert.deepEqual(show('featured').map(({ id }) => id).sort(), projects.filter(({ featured }) => featured).map(({ id }) => id).sort());
  for (const category of ['medical-ai', 'computer-vision', 'machine-learning', 'deep-learning', 'data-science', 'smart-agriculture', 'robotics-iot', 'optimization', 'full-stack', 'research'] as const) {
    const visible = show(category);
    assert.ok(visible.every((project) => project.categories.includes(category)), `${category} only contains members`);
    assert.equal(new Set(visible.map(({ id }) => id)).size, visible.length, `${category} has unique projects`);
  }
});

test('Brain Tumor MRI is discoverable across all four verified overlapping categories', () => {
  for (const category of ['medical-ai', 'computer-vision', 'machine-learning', 'deep-learning'] as const) {
    assert.equal(show(category).filter(({ id }) => id === 'brain-tumor-mri-ai-system').length, 1);
  }
});

test('Breast Cancer is tabular Medical AI, Machine Learning, and Data Science only', () => {
  const project = projects.find(({ id }) => id === 'breast-cancer-classification-ml');
  assert.deepEqual(project?.categories, ['medical-ai', 'machine-learning', 'data-science']);
  assert.equal(show('computer-vision').some(({ id }) => id === project?.id), false);
  assert.equal(show('deep-learning').some(({ id }) => id === project?.id), false);
});

test('search combines with category membership regardless of case or surrounding spaces', () => {
  assert.equal(show('computer-vision', '  BRAIN tumor  ').filter(({ id }) => id === 'brain-tumor-mri-ai-system').length, 1);
  assert.ok(show('all', '  cOmPuTeR ViSiOn  ').some(({ id }) => id === 'brain-tumor-mri-ai-system'));
  assert.equal(show('medical-ai', 'backpack').length, 0);
});

test('every project has one valid primary category included once in its category memberships', () => {
  for (const project of projects) {
    assert.ok(project.categories.includes(project.primaryCategory), `${project.title} includes its primary category`);
    assert.ok(project.categories.length > 0, `${project.title} has category membership`);
    assert.equal(new Set(project.categories).size, project.categories.length, `${project.title} has no duplicate category IDs`);
  }
});

test('sorting composes with category filters and preserves all matches', () => {
  const expected = show('deep-learning').map(({ id }) => id).sort();
  assert.deepEqual(show('deep-learning', '', 'newest').map(({ id }) => id).sort(), expected);
  assert.deepEqual(show('deep-learning', '', 'aiHeavy').map(({ id }) => id).sort(), expected);
});

test('empty search results are represented by an empty array', () => {
  assert.deepEqual(show('medical-ai', 'no such portfolio entry'), []);
});
