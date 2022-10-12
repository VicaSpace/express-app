const { Router } = require('express')
const {catRouter} = require('./catRoutes')
const  router = Router()

router.use('/cats', catRouter)


module.exports={
    router
} 