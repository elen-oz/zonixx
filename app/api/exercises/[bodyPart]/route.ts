import { NextResponse } from 'next/server';
import { fetchData, exerciseOptions } from "@/lib/fetchData";

export async function GET(
    request: Request,
    { params }: { params: { bodyPart: string } }
) {
    const bodyPart = params.bodyPart;
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=2000&offset=0`;
    const data = await fetchData(url, exerciseOptions);
    return NextResponse.json(data);
}