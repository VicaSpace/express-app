import { Router } from 'express'
import { catRouter } from './catRoutes'
const router = Router()

router.use('/cats', catRouter)

module.exports = {
  router
}

export { router }
