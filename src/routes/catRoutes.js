const { Router } = require('express');
const { getFacts } = require('../controllers/cats.js');
const { logger } = require('../middlewares/logger.js');
const router = Router();

router.get('/facts', logger, getFacts);

module.exports = {
  catRouter: router,
};
