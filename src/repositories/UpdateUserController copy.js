export const CreateUserController =  (req, res) => {
  const data = [
    { name: 'Mariana '},
    { name: 'Dimas' },
    { name: 'Maria Luiza' }
  ]

  return res.json(data)
}