# nodejs-database-connection
Samples database connections: mongodb, mysql and postgresql

### Dependencies

```json
    "express": "^4.10.6",
    "mongoose": "^4.6.5",
    "mysql": "^2.5.4",
    "pg": "^6.1.0"
```    

### Installing and running the project

```console
$ cd /path_app
$ npm install
$ node server.js
```

### Mysql DDL

```sql
create table users (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  email varchar(50),
  password varchar(50),
  PRIMARY KEY (id)
);
```

### Postgresql DDL

```sql
create table users (
  id serial,
  name varchar(50),
  email varchar(50),
  password varchar(50),
  PRIMARY KEY (id)
);
```

### Author
[Fabricio Costa](http://fabriciojf.com) - fabriciojf@gmail.com