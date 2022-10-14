import { openDb } from '../db/conndb.js'

export const ListUserRepository =  async () => {

  const users =  (await openDb()).all('SELECT * FROM users')

  return users
}