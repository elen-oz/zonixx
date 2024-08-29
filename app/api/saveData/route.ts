import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  const data = await req.json();

  const filePath = path.join(process.cwd(), 'data', 'data.json');

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json({ message: 'Data updated successfully' });
}
