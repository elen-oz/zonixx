import {NextRequest, NextResponse} from 'next/server';
import pool from '@/lib/db';

export async function GET(
    req: NextRequest,
    {params}: { params: { bodyPart: string } }
) {
    // const { body_part } = params;
    const {bodyPart} = params;

    if (!bodyPart) {
        return NextResponse.json({error: 'Body part is required'}, {status: 400});
    }

    try {
        const result = await pool.query(
            'SELECT * FROM exercises WHERE bodyPart = $1',
            [bodyPart]
        );

        if (result.rows.length === 0) {
            return NextResponse.json({error: 'No exercises found for this body part'}, {status: 404});
        }

        return NextResponse.json(result.rows, {status: 200});
    } catch (error) {
        console.error('Database query error:', error);
        return NextResponse.json(
            {error: 'Internal Server Error'},
            {status: 500}
        );
    }
}