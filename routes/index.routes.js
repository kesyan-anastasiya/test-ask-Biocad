const router = require('express').Router()
const mainRouter = require('./views/main.routes')
const analyticsRouter = require('./views/analytics.routes')

router.use('/', mainRouter)
router.use('/analytics', analyticsRouter)


module.exports = router;
