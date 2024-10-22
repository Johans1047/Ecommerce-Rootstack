import { NextResponse } from 'next/server';
import connect from "@/lib/db";

async function openDb() {
  return open({
    filename: '../../../data/db.sqlite3',
    driver: sqlite3.Database
  });
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');

    if (!q) {
      return NextResponse.json(
        { message: 'Query parameter is required' },
        { status: 400 }
      );
    }

    const db = await connect();
    
    const destinations = await db.all(
      `SELECT num, name, description, location, province, image_url 
       FROM destinations 
       WHERE name LIKE ? OR 
             description LIKE ? OR 
             location LIKE ? OR
             province LIKE ?
       LIMIT 5`,
      [`%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`]
    );

    await db.close();
    
    return NextResponse.json(destinations);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { message: 'Error al buscar destinos' },
      { status: 500 }
    );
  }
}