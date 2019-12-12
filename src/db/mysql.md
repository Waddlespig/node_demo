进入数据库
use 数据库名;

注释
-- show 表名;

插入数据
insert into 表名 (字段, 'password') values (值, 与字段对应);

一般查询全部数据
select * from 表名;

查询对应数据
select 字段/列 from 表名;

多条件查询
select * from 表名 where 字段=值 and 字段=值;
select * from 表名 where 字段=值 or 字段=值;

模糊查询
select * from 表名 where 字段 like '%值%';

排序  desc倒序
select * from 表名 where 字段 like '%值%' order id desc;

全部更新
update 表名 set 字段=值;

条件更新
update 表名 set 字段=值 where 字段=值;

SET SQL_SAFE_UPDATES = 0;

全部删除
delete from 表名;

条件删除
delete from 表名 where 字段=值;

伪删除
select * from 表名 where state='1';
update 表名 set state='0' where 字段=值;

不等于<>

