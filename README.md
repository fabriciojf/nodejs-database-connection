# nodejs-database-connection
Samples database connections: mongodb, mysql and postgresql

### mMysql DDL

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