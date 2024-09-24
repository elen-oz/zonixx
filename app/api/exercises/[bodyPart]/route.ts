import {NextResponse} from 'next/server';
import {fetchData, exerciseOptions} from "@/lib/fetchData";

export async function GET(request: Request, {params}: { params: { bodyPart: string } }) {
    const bodyPart = params.bodyPart;
    console.info(`[API] Fetching exercises for body part: ${bodyPart}`);
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=2000&offset=0`;
    const data = await fetchData(url, exerciseOptions);
    console.info(`[API] Fetched ${data?.length || 0} exercises for ${bodyPart}`);
    return NextResponse.json(data);
}