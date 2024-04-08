const React = require('react')
const Layout = require('../Layout')
const DeviceCard = require('../ui/DeviceCard')

module.exports = function MainPage({ title, devices }) {
    return (
        <Layout title={title}>
            <form className="searchForm">
                {' '}
                <input
                    type="text"
                    className="text"
                    name="search"
                    placeholder="Поиск прибора в Botanique по номеру, названию, подразделению и др."
                    required
                />
                <img src="/img/Vector.png" className="QRcode" alt="QR code" />
            </form>

            <div className="devices-list-container">
                <h2>
                    <svg
                        className="favorite"
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z"
                            fill="currentColor"
                            fill-opacity="0.87"
                        />
                    </svg>
                    Любимые приборы
                </h2>
                <div className="device-list-row column-titles">
                    <div className="device-name-column">Название</div>
                    <div className="device-status-column">Статус</div>
                </div>

                {devices.map((card) => (
                    <DeviceCard device={card}></DeviceCard>
                ))}
            </div>
        </Layout>
    )
}
