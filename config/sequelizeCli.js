module.exports = {
    development: {
        address: '127.0.0.1',
        dialect: 'postgres',
        host: 'localhost',
        port: '5432',
        database: 'onebitflix_development',
        username: 'onebitflix_development',
        password: 'onebitflix'
    }
}
//docker run --name onebitflix-dev -e POSTGRES_PASSWORD=onebitflix -e POSTGRES_USER=onebitflix_development -p 5432:5432 -d postgres 