const { Router } = require('express');
const { getFacts, insertFacts } = require('../controllers/cats.js');
const { logger } = require('../middlewares/logger.js');
const router = Router();

router.get('/facts', logger, getFacts);

router.post('/facts', logger, insertFacts);

module.exports = {
  catRouter: router,
};
