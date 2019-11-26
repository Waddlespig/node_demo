const {
  getList,
  getDetail,
  newBlog,
  updateBlog
} = require('../controller/blog');

const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel');

const handlerBlog = (req, res) => {
  const method = req.method;
  // const url = req.url;
  // const path = url.split('?')[0];

  // 查询列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    // 获取GET参数
    const author = req.query.author || '';
    const keyword = req.query.author || '';
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  // 查询详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    // 获取GET参数
    const id = req.query.id || '';
    const detailData = getDetail(id);
    return new SuccessModel(detailData);
  }

  // 新增
  if (method === 'POST' && req.path === '/api/blog/new') {
    // 获取POST参数
    const newData = newBlog(req.body);
    return new SuccessModel(newData);
  }

  // 删除
  if (method === 'POST' && req.path === '/api/blog/delete') {
    const deleteData = updateBlog(req.body);
    if (deleteData.success) {
      return new SuccessModel(deleteData, '删除成功');
    } else {
      return new ErrorModel(deleteData, '删除失败');
    }
  }

  // 更新
  if (method === 'POST' && req.path === '/api/blog/update') {
    const updata = updateBlog(req.body);
    if (updata.success) {
      return new SuccessModel(updata, '更新成功');
    } else {
      return new ErrorModel(updata, '更新失败');
    }
  }
}

module.exports = handlerBlog;
