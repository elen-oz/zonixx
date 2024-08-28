import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows);
    // } else if (req.method === 'POST') {
    //   const { name, email } = req.body;
    //   const result = await pool.query(
    //     'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    //     [name, email]
    //   );
    //   res.status(201).json(result.rows[0]);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
