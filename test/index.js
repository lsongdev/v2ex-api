import v2ex from '../index.js';

(async () => {

  const topics = await v2ex.latest();
  console.log(topics);

})();