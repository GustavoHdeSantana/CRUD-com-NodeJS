import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  dialect: 'postgres',
  dialectOptions: { 
  ssl: { 
      require: true,
      rejectUnauthorized: false
    }
  }})
export default db;