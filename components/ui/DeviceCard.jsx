const React = require('react')

module.exports = function DeviceCard({ device }) {
    function renderAlarmIcon(type) {
        switch (type) {
            case 'alarm1':
                return (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.5793 2.08L4.1493 0.65C1.7493 2.48 0.169297 5.3 0.0292969 8.5H2.0293C2.1793 5.85 3.5393 3.53 5.5793 2.08ZM17.9693 8.5H19.9693C19.8193 5.3 18.2393 2.48 15.8493 0.65L14.4293 2.08C16.4493 3.53 17.8193 5.85 17.9693 8.5ZM15.9993 9C15.9993 5.93 14.3593 3.36 11.4993 2.68V2C11.4993 1.17 10.8293 0.5 9.9993 0.5C9.1693 0.5 8.4993 1.17 8.4993 2V2.68C5.6293 3.36 3.9993 5.92 3.9993 9V14L1.9993 16V17H17.9993V16L15.9993 14V9ZM9.9993 20C10.1393 20 10.2693 19.99 10.3993 19.96C11.0493 19.82 11.5793 19.38 11.8393 18.78C11.9393 18.54 11.9893 18.28 11.9893 18H7.9893C7.9993 19.1 8.8893 20 9.9993 20Z"
                            fill="black"
                            fill-opacity="0.87"
                        />
                    </svg>
                )
            case 'alarm2':
                return (
                    <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.9 20 8 20ZM14 14V9C14 5.93 12.37 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.64 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14ZM12 15H4V9C4 6.52 5.51 4.5 8 4.5C10.49 4.5 12 6.52 12 9V15Z"
                            fill="black"
                            fill-opacity="0.87"
                        />
                    </svg>
                )
            case 'alarm3':
                return (
                    <svg
                        width="17"
                        height="20"
                        viewBox="0 0 17 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 16.69L3.84 4.14L1.27 1.49L0 2.76L2.8 5.56V5.57C2.28 6.56 2 7.73 2 8.99V13.99L0 15.99V16.99H13.73L15.73 18.99L17 17.72L16 16.69ZM8 20C9.11 20 10 19.11 10 18H6C6 19.11 6.89 20 8 20ZM14 12.68V9C14 5.92 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C6.35 2.71 6.21 2.76 6.08 2.8C5.98 2.83 5.88 2.87 5.78 2.91H5.77C5.76 2.91 5.76 2.91 5.75 2.92C5.52 3.01 5.29 3.12 5.07 3.23C5.07 3.23 5.06 3.23 5.06 3.24L14 12.68Z"
                            fill="black"
                            fill-opacity="0.87"
                        />
                    </svg>
                )
            default:
                return null // Возвращаем null или SVG по умолчанию
        }
    }
    return (
        <div className="device-card">
            <div className="column title-column">
                <div className="content">
                    <img
                        src={device.img}
                        className="card-img"
                        alt={device.title}
                    />
                    <h5 className="card-title">{device.title}</h5>
                </div>
            </div>
            <div className="column status-column">
                <div className="content">
                    <select
                        className="form-select"
                        name="deviceStatus"
                        id="deviceStatus"
                    >
                        <option key={30} value={30}>
                            Свободен
                        </option>
                    </select>
                    {renderAlarmIcon(device.alarmType)}
                </div>
            </div>
        </div>
    )
}
