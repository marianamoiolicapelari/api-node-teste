import { CreateUserController } from '../controllers/CreateUserController.js'
import { ListUserController } from '../controllers/ListUserController.js'

export const UserRoutes = (app) => {
  app.get('/', ListUserController)
  app.post('/', CreateUserController)
}
