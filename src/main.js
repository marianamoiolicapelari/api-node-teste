import express from 'express'
import cors from 'cors'
import { createUserTable } from './db/tables/UserTable.js'
import { UserRoutes } from './routes/UsersRoute.js'

const app = express()
const corsMiddleware = cors()
app.use(corsMiddleware)
app.use(express.json())

// Cria a tabela de usuário se não existir
createUserTable()

// Instância as rotas
UserRoutes(app)

// Inicializa o servidor
app.listen(3000)