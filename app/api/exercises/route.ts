import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

type responseItemType = {
  id: string;
  name: string;
  body_part: string;
  equipment: string;
  gif_url: string;
  target: string;
  secondary_muscles: string[];
  instructions: string[];
};

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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      id,
      name,
      body_part,
      equipment,
      gif_url,
      target,
      secondary_muscles,
      instructions,
    } = body;

    if (!id || !name || !body_part || !equipment || !gif_url || !target || !secondary_muscles || !instructions) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const result = await pool.query(
        `INSERT INTO exercises (id, name, body_part, equipment, gif_url, target, secondary_muscles, instructions)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [id, name, body_part, equipment, gif_url, target, secondary_muscles, instructions]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error inserting exercise:', error);
    return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
    );
  }
}
