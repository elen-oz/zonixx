import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM exercises');
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// } else if (req.method === 'POST') {
//   const { name, email } = req.body;
//   const result = await pool.query(
//     'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
//     [name, email]
//   );
//   res.status(201).json(result.rows[0]);
