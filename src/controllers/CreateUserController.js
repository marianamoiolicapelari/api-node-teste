import { CreateUserRepository } from '../repositories/CreateUserRepository.js'

export const CreateUserController =  async (req, res) => {
  const  { firstname, lastname, email } = req.body
  console.log(firstname, lastname, email)
  
  await CreateUserRepository({ firstname, lastname, email })

  return res.json({
    status: 200,
    message: 'User created successfully'
  })
}