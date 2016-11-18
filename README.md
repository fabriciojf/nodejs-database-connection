# nodejs-database-connection
Samples database connections: mongodb, mysql and postgresql

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
[Fabricio Costa](http://fabriciojf.com)