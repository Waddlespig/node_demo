const {
  exec
} = require('../db/mysql');


// 查询数据列表
const getList = (author, title) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (title) {
    sql += `and title like '%${title}%' `;
  }
  sql += `order by createtime desc;`;
  return exec(sql);
}

// 查询详情数据
const getDetail = (id) => {
  let sql = `select * from blogs where 1=1 `;
  if (id) {
    sql += `and id='${id}';`;
  }
  return exec(sql);
}

// 新增数据
const newBlog = (data = {}) => {
  const title = data.title;
  const content = data.content;
  const author = data.author;
  const createTime = Date.now();
  const sql = `insert into blogs (title, content, author, createtime) values ('${title}', '${content}', '${author}', '${createTime}');`;
  return exec(sql).then(new_blog => {
    // console.log(new_blog);
    return {
      id: new_blog.insertId,
    };
  });
}

// 更新数据
const updateBlog = (id, data = {}) => {
  const title = data.title;
  const content = data.content;
  const sql = `update blogs set title='${title}', content='${content}' where id='${id}';`;
  return exec(sql).then(update_data => {
    // console.log('update:', update_data);
    // affectedRows-影响行数
    if (update_data.affectedRows > 0) {
      return true;
    }
    return false;
  })
}

// 删除数据
const deleteBlog = (data = {}) => {
  const id = data.id;
  const author = data.author;
  const sql = `delete from blogs where id='${id}' and author='${author}';`;
  return exec(sql).then(delete_data => {
    // affectedRows-影响行数
    if (delete_data.affectedRows > 0) {
      return true;
    }
    return false;
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
};
