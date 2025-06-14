const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'auth_api',
  password: 'Al171178@',
  port: 5432,
});

module.exports = pool;
