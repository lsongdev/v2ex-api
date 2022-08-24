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

const V2EX_API = `https://v2ex.com/api`;

export const getJSON = async (path) => {
  const response = await get(V2EX_API + path);
  const data = await readStream(response);
  return JSON.parse(data);
};

export const profile = id => {
  let field = 'id';
  if (/^@/.test(id)) {
    id = id.substr(1);
    field = 'username';
  }
  return getJSON(`/members/show.json?${field}=${id}`);
};

export const hot = () => {
  return getJSON(`/topics/hot.json`);
};

export const latest = () => {
  return getJSON(`/topics/latest.json`);
};

export const node = name => {
  return getJSON(`/nodes/show.json?name=${name}`);
};

export const replies = topicId => {
  return getJSON(`/replies/show.json?topic_id=${topicId}`);
};