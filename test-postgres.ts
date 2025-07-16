// test-postgres.js
import { Client } from 'pg';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const client = new Client({
  host: process.env.DATABASE_HOST,
  port: 5432,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: false,
});

client
  .connect()
  .then(() => console.log('✅ Connected to PostgreSQL!'))
  .catch((err) => console.error('❌ Connection failed:', err))
  .finally(() => client.end());
