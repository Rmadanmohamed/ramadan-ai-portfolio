import test from 'node:test';
import assert from 'node:assert/strict';
import { buildContactMailto } from '../src/utils/contactMailto.ts';

test('contact drafts address the official recipient and include the sender email and message', () => {
  const draft = new URL(buildContactMailto('ramadanmohameddd3@gmail.com', 'Ada Example', 'ada@example.com', 'Discuss a RAG project'));
  assert.equal(draft.protocol, 'mailto:');
  assert.equal(draft.pathname, 'ramadanmohameddd3@gmail.com');
  assert.equal(draft.searchParams.get('subject'), 'Portfolio contact from Ada Example');
  assert.equal(draft.searchParams.get('body'), 'From: Ada Example\nEmail: ada@example.com\n\nDiscuss a RAG project');
});
