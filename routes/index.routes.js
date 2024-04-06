const router = require('express').Router()
const mainRouter = require('./views/main.routes')
const apiMainRouter = require('./api/api.main.routes')


router.use('/', mainRouter)
router.use('/api', apiMainRouter)


module.exports = router;
