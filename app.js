const queryString = require('querystring');
const handlerUser = require('./src/router/user');
const handlerBlog = require('./src/router/blog');

// 获取post数据
const getPostData = function (req) {
  const promise = new Promise((reslove, reject) => {
    // 忽略非POST请求，非json数据请求
    // 临时用暂时性忽略非post请求
    if (req.method !== 'POST' || req.headers['content-type'] !== 'application/json') {
      reslove({});
      return;
    }
    // post请求数据
    let postData = '';
    req.on('data', chunk => {
      postData += chunk.toString();
    })
    req.on('end', () => {
      if (!postData) {
        reslove({});
        return;
      }
      reslove(JSON.parse(postData));
    })
  })
  return promise;
}

const serverHandler = (req, res) => {
  // 设置返回格式
  res.setHeader('Content-type', 'application/json');

  // 获取path
  const url = req.url;
  req.path = url.split('?')[0];

  // 解析query
  req.query = queryString.parse(url.split('?')[1]);

  // 获取post请求数据
  getPostData(req).then(postData => {
    req.body = postData;

    // blog数据返回
    const blogData = handlerBlog(req, res);
    if (blogData) {
      res.end(JSON.stringify({
        ...blogData,
        env: process.env.NODE_ENV
      }))
      return;
    }

    // user数据返回
    const userData = handlerUser(req, res);
    if (userData) {
      res.end(JSON.stringify({
        ...userData,
        env: process.env.NODE_ENV
      }))
      return;
    }

    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("404 Not Found");
    res.end();
  })


  // const resdata = {
  //   env: process.env.NODE_ENV,
  //   name: 'node_demo'
  // }
  //
  // res.end(JSON.stringify(resdata));
}

module.exports = serverHandler;
