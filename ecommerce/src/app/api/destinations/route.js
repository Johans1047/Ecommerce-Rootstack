import { NextResponse } from 'next/server';
import connect from "@/lib/db";

async function openDb() {
    return open({
        filename: '../../../data/db.sqlite3',
        driver: sqlite3.Database
    });
}

export async function GET() {
  try {
    const db = await connect();
    
    const destinations = await db.all(
      `SELECT num, name, description, location, province, 
              image_url, image_url2, cost_per_day 
       FROM destinations 
       ORDER BY province DESC`
    );

    await db.close();
    
    return NextResponse.json(destinations);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { message: 'Error al obtener los destinos' },
      { status: 500 }
    );
  }
}