module.exports = {
    mongodb: {
        host: 'mongodb://localhost/mongotest'
    },
    mysql: {
        host: 'localhost',
        user: 'nodejs',
        pass: 'node123',
        database: 'nodetest'
    },
    postgres: {
        connectionString: 'postgres://postgres:PASS@192.168.25.100:5432/DATABASE',  
        poolSettings: {
            user: 'postgres',
            database: 'DATABASE',
            password: 'PASS',
            host: '192.168.25.100',
            port: '5432',
            max: 10,
            idleTimeoutMillis: 30000,
        }
    },
    server: {
        host: 'localhost',
        port: 3000
    }
};