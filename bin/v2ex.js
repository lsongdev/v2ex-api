#!/usr/bin/env node

import * as v2ex from '../index.js';

// console.log('选择分类');
// console.log();
// console.log('+ 热门');
// console.log('+ 最新');

(async () => {
  const topics = await v2ex.hot();
  for(const topic of topics) {
    console.log(`[${topic.node.title}]\t\t${topic.title}`);
  }
})();