import https from 'https';

const get = url =>
  new Promise(done => https.get(url, done));

const readStream = stream => {
  const buffer = [];
  return new Promise((resolve, reject) => {
    stream
      .on('error', reject)
      .on('data', chunk => buffer.push(chunk))
      .on('end', () => resolve(Buffer.concat(buffer)))
  });
};

export class V2EX {
  constructor({ api = `https://v2ex.com/api` } = {}) {
    this.api = api;
  }
  async request(path) {
    const response = await get(this.api + path);
    const data = await readStream(response);
    return JSON.parse(data);
  }
  me(id) {
    let field = 'id';
    if (/^@/.test(id)) {
      id = id.substr(1);
      field = 'username';
    }
    return this.request(`/members/show.json?${field}=${id}`);
  }
  hot() {
    return this.request(`/topics/hot.json`);
  }
  latest() {
    return this.request(`/topics/latest.json`);
  }
  node(name) {
    return this.request(`/nodes/show.json?name=${name}`);
  }
  replies(topicId) {
    return this.request(`/replies/show.json?topic_id=${topicId}`);
  }
}

export default new V2EX();