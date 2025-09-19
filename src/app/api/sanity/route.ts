import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/client';

export async function POST(request: NextRequest) {
  try {
    const { query, params = {} } = await request.json();
    
    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    const result = await client.fetch(query, params);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Sanity API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from Sanity' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Use POST method with query and params' });
}
