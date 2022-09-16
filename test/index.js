import assert from 'assert';
import * as v2ex from '../index.js';
import { test } from './test.js';

test("v2ex#latest", async () => {
  const topics = await v2ex.latest();
  assert.ok(Array.isArray(topics));
});

test("v2ex#hot", async () => {
  const hot = await v2ex.hot();
  assert.ok(Array.isArray(hot));
});

test("v2ex#node", async () => {
  const node = await v2ex.node("android");
  assert.equal(node.title, "Android");
});

test("v2ex#replies", async () => {
  const replies = await v2ex.replies();
  assert.ok(Array.isArray(replies));
});