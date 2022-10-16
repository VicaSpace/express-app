import { Router } from 'express'
import { getFacts, insertFacts } from '../controllers/cats.js'
import { logger } from '../middlewares/logger.js'

const router = Router()

router.get('/facts', logger, getFacts)

router.post('/facts', logger, insertFacts)

export { router as catRouter }
