import { NextRequest, NextResponse } from 'next/server';
import { fetchAllExercises } from '@/lib/api';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') ?? '';
  const data = await fetchAllExercises();

  if (!data) {
    return NextResponse.json({ error: 'Failed to fetch exercises' }, { status: 502 });
  }

  if (!query) return NextResponse.json(data);

  const results = data.filter(
    (exercise) =>
      exercise.name.toLowerCase().includes(query) ||
      exercise.target.toLowerCase().includes(query) ||
      exercise.equipment.toLowerCase().includes(query) ||
      exercise.bodyPart.toLowerCase().includes(query),
  );

  return NextResponse.json(results);
}

// import { NextRequest, NextResponse } from 'next/server';
// import pool from '@/lib/db';
//
// export async function GET() {
//   try {
//     const result = await pool.query('SELECT * FROM exercises');
//     return NextResponse.json(result.rows, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }
//
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const {
//       id,
//       name,
//       body_part,
//       equipment,
//       // gif_url,
//       gifUrl,
//       target,
//       // secondary_muscles,
//       secondaryMuscles,
//       instructions,
//     } = body;
//
//     if (!id || !name || !body_part || !equipment || !gifUrl || !target || !secondaryMuscles || !instructions) {
//       return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
//     }
//
//     const result = await pool.query(
//         `INSERT INTO exercises (id, name, body_part, equipment, gif_url, target, secondaryMuscles, instructions)
//        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
//         [id, name, body_part, equipment, gifUrl, target, secondaryMuscles, instructions]
//     );
//
//     return NextResponse.json(result.rows[0], { status: 201 });
//   } catch (error) {
//     console.error('Error inserting exercise:', error);
//     return NextResponse.json(
//         { error: 'Internal Server Error' },
//         { status: 500 }
//     );
//   }
// }
