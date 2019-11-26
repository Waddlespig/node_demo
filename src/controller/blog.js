// 查询数据列表
const getList = (author, keyword) => {
  // 返回假数据
  return [
    {
      id: 1,
      title: '标题a',
      content: '内容a',
      createTime: 1574605758831,
      author: '作者a',
    },
    {
      id: 2,
      title: '标题b',
      content: '内容b',
      createTime: 1574605758831,
      author: '作者b',
    },
    {
      id: 3,
      title: '标题c',
      content: '内容c',
      createTime: 1574605758831,
      author: '作者3',
    }
  ]
}

// 查询数据列表
const getDetail = (author, keyword) => {
  // 返回假数据
  return [
    {
      id: 1,
      title: '标题a',
      content: '内容a',
      createTime: 1574605758831,
      author: '作者a',
    }
  ]
}

// 新增数据
const newBlog = (data = {}) => {
  return {
    ...data,
    id: 3
  }
}

// 更新数据
const updateBlog = (data = {}) => {
  console.log('update-id:', data);
  if (data && data.id) {
    return {
      success: true
    }
  }
  return {
    success: false
  }
}

// 删除数据
const deleteBlog = (data = {}) => {
  console.log('update-id:', data);
  if (data && data.id) {
    return {
      success: true
    }
  }
  return {
    success: false
  }
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog
};
