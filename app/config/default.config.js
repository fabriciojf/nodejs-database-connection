module.exports = {
    "mongodb": {
        "host": "mongodb://localhost/mongotest"
    },
    "mysql": {
        "host": "localhost",
        "user": "nodejs",
        "pass": "node123",
        "database": "nodetest"
    },
    "postgres": {
        "user": "postgres",
        "database": "nodetest",
        "password": "123456",
        "host": "192.168.25.100",
        "port": "5432",
        "max": 10,
        idleTimeoutMillis: 30000,
    },
    "server": {
        "host": "localhost",
        "port": 3000
    }
};