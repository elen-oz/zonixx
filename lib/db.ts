import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gym',
  password: '123123',
  port: 5432,
});

export default pool;
