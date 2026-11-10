import { NextRequest, NextResponse } from 'next/server';
import { fetchAllExercises } from '@/lib/api';

export async function GET(request: NextRequest) {
  const query = (request.nextUrl.searchParams.get('q') ?? '').trim().toLowerCase();
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
