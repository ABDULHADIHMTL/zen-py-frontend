import sqlite3 from 'sqlite3';
import { promisify } from 'util';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, company, message } = req.body;

    // Initialize SQLite database
    const db = new sqlite3.Database('./enquiries.db');
    const run = promisify(db.run.bind(db));

    try {
      // Create table if not exists
      await run(`
        CREATE TABLE IF NOT EXISTS enquiries (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT NOT NULL,
          company TEXT,
          message TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Insert enquiry
      await run(
        'INSERT INTO enquiries (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)',
        [name, email, phone, company, message]
      );

      db.close();
      res.status(200).json({ message: 'Enquiry submitted successfully' });
    } catch (error) {
      db.close();
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}