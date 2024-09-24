import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchData, exerciseOptions } from "@/lib/fetchData";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = "https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0";
    const data = await fetchData(url, exerciseOptions);
    res.status(200).json(data);
}