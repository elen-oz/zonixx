import { NextResponse } from 'next/server';
import { fetchExercises } from '@/lib/api';

export async function GET(_request: Request, { params }: { params: { bodyPart: string } }) {
  const { bodyPart } = params;
  const data = await fetchExercises(bodyPart);

  if (!data) {
    return NextResponse.json({ error: 'Failed to fetch exercises' }, { status: 502 });
  }
  if (data.length === 0) {
    return NextResponse.json({ error: 'No exercises found' }, { status: 404 });
  }
  return NextResponse.json(data);
}
