import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "gym2",
  password: "123123",
  port: 5432,
});

export default pool;
