const router = require('express').Router()
const AnalyticsPage = require('../../components/pages/AnalyticsPage')
const { Device, User } = require('../../db/models')

router.get('/', async (req, res) => {
    try {
        const device = await Device.findOne({ where: { id: 1 } })
        const user = await User.findOne({ where: { id: 1 } })
        const html = res.renderComponent(AnalyticsPage, {
            title: 'Analytics',
            device,
            user,
        })
        res.send(html)
    } catch ({ message }) {
        res.status(500).json({ message })
    }
})

module.exports = router
