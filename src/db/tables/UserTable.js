import { openDb } from '../conndb.js'

export const createUserTable = async () => {
  openDb().then( (db) => {
    db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER NOT NULL PRIMARY KEY, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(50), create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)')
  })
}