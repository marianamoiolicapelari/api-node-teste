import { ListUserRepository } from '../repositories/ListUserRepository.js'

export const ListUserController =  async (req, res) => {

  const users = await ListUserRepository()

  return res.json(users)
}