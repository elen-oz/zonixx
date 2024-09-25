import { NextResponse } from 'next/server';
import { fetchExercises } from '@/lib/api';

export async function GET(request: Request, { params }: { params: { bodyPart: string } }) {
  const { bodyPart } = params;
  console.info(`[API] Fetching exercises for body part: ${bodyPart}`);

  try {
    const data = await fetchExercises(bodyPart);

    if (Array.isArray(data) && data.length > 0) {
      console.info(`[API] Fetched ${data.length} exercises for ${bodyPart}`);
      return NextResponse.json(data);
    }
    console.warn(`[API] No exercises found for ${bodyPart}`);
    return NextResponse.json({ error: 'No exercises found' }, { status: 404 });
  } catch (error) {
    console.error(`[API] Error fetching exercises for ${bodyPart}:`, error);
    return NextResponse.json({ error: 'Failed to fetch exercises' }, { status: 500 });
  }
}
