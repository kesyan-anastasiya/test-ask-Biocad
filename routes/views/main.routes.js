const router = require('express').Router()
const MainPage = require('../../components/pages/MainPage')
const { Device } = require('../../db/models')

router.get('/', async (req, res) => {
    try {
        const devices = await Device.findAll()
        const html = res.renderComponent(MainPage, { title: 'Main page', devices })
        res.send(html)
    } catch ({ message }) {
        res.json({ message })
    }
})

module.exports = router;