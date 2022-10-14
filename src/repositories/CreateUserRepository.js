import { openDb } from '../db/conndb.js'

export const CreateUserRepository =  (user) => {
  try {
    openDb().then((db) => {
      db.run('INSERT INTO users (firstname, lastname, email) values(?,?,?)', [user.firstname, user.lastname, user.email])
    })
    // (await openDb()).run('INSERT INTO users (firstname, lastname, email) values(?,?,?)', [user.firstname, user.lastname, user.email])
  } catch (error) {
    return { status: 400, error}
  }
}