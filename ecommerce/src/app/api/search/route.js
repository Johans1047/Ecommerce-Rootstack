import connect from "@/lib/db";
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
  return open({
    filename: '../../data/database.db',
    driver: sqlite3.Database
  });
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  try {
    const db = await openDb();
    
    const destinations = await db.all(
      `SELECT num, name, description, location, province, image_url FROM destinations 
       WHERE name LIKE ? OR 
             description LIKE ? OR 
             location LIKE ? OR
             province LIKE ?
       LIMIT 5`,
      [`%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`]
    );

    await db.close();
    res.status(200).json(destinations);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Error al buscar destinos' });
  }
}