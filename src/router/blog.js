const {
  getList,
  getDetail,
  newBlog,
  deleteBlog
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
    const title = req.query.title || '';
    // const listData = getList(author, keyword);
    const resData = getList(author, title);
    return resData.then(listData => {
      return new SuccessModel(listData);
    })
  }

  // 查询详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    // 获取GET参数
    const id = req.query.id || '';
    // const detailData = getDetail(id);
    const resData = getDetail(id);
    return resData.then(detail_data => {
      return new SuccessModel(detail_data[0]);
    })
  }

  // 新增
  if (method === 'POST' && req.path === '/api/blog/new') {
    // 获取POST参数
    // const newData = newBlog(req.body);
    // return newData.then(new_data => {
    //   return new SuccessModel(new_data);
    // })
    const resData = newBlog(req.body);
    return resData.then(new_data => {
      return new SuccessModel(new_data);
    })
  }

  // 更新
  if (method === 'POST' && req.path === '/api/blog/update') {
    const blog_id = req.body.id;
    const resData = updateBlog(blog_id, req.body);
    return resData.then(updata_data => {
      if (updata_data) {
        return new SuccessModel(updata_data, '更新成功');
      } else {
        return new ErrorModel(updata_data, '更新失败');
      }
    });
  }

  // 删除
  if (method === 'POST' && req.path === '/api/blog/delete') {
    // const deleteData = updateBlog(req.body);
    // if (deleteData.success) {
    //   return new SuccessModel(deleteData, '删除成功');
    // } else {
    //   return new ErrorModel(deleteData, '删除失败');
    // }
    const resData = deleteBlog(req.body);
    return resData.then(delete_data => {
      if (delete_data) {
        return new SuccessModel(delete_data, '删除成功');
      } else {
        return new ErrorModel(delete_data, '删除失败');
      }
    })
  }
}

module.exports = handlerBlog;
