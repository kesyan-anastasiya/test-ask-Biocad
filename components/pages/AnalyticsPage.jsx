const React = require('react')
const Layout = require('../Layout')
const DeviceCard = require('../ui/DeviceCard')

module.exports = function MainPage({ title, device }) {
    return (
        <Layout title={title}>
            <div>{device.title}</div>
        </Layout>
    )
}
