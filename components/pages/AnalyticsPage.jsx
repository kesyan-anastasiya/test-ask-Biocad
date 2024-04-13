const React = require('react')
const Layout = require('../Layout')
const TimeFilters = require('../ui/TimeFilters')
const TaskList = require('../ui/TaskList')
const DateStartEnd = require('../ui/DateStartEnd')

module.exports = function AnalyticsPage({ title, device, user }) {
    return (
        <Layout title={title}>
            <div className="device-details">
                <div
                    className="device-header"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <h1>{device.title}</h1>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button
                            className="work"
                            style={{ marginRight: '16px' }}
                        >
                            В работе
                        </button>
                        <svg
                            className="favorite"
                            style={{ marginRight: '8px' }}
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z"
                                fillOpacity="0.87"
                                fill="#EE3F44"
                            />
                        </svg>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.1231 10.936C17.1591 10.636 17.1831 10.324 17.1831 10C17.1831 9.67602 17.1591 9.36402 17.1111 9.06402L19.1391 7.48002C19.3191 7.33602 19.3671 7.07202 19.2591 6.86802L17.3391 3.54402C17.2191 3.32802 16.9671 3.25602 16.7511 3.32802L14.3631 4.28802C13.8591 3.90402 13.3311 3.59202 12.7431 3.35202L12.3831 0.808024C12.3471 0.568024 12.1431 0.400024 11.9031 0.400024H8.06314C7.82314 0.400024 7.63114 0.568024 7.59514 0.808024L7.23514 3.35202C6.64714 3.59202 6.10714 3.91602 5.61514 4.28802L3.22714 3.32802C3.01114 3.24402 2.75914 3.32802 2.63914 3.54402L0.719139 6.86802C0.599139 7.08402 0.647139 7.33602 0.839139 7.48002L2.86714 9.06402C2.81914 9.36402 2.78314 9.68802 2.78314 10C2.78314 10.312 2.80714 10.636 2.85514 10.936L0.827139 12.52C0.647139 12.664 0.599139 12.928 0.707139 13.132L2.62714 16.456C2.74714 16.672 2.99914 16.744 3.21514 16.672L5.60314 15.712C6.10714 16.096 6.63514 16.408 7.22314 16.648L7.58314 19.192C7.63114 19.432 7.82314 19.6 8.06314 19.6H11.9031C12.1431 19.6 12.3471 19.432 12.3711 19.192L12.7311 16.648C13.3191 16.408 13.8591 16.084 14.3511 15.712L16.7391 16.672C16.9551 16.756 17.2071 16.672 17.3271 16.456L19.2471 13.132C19.3671 12.916 19.3191 12.664 19.1271 12.52L17.1231 10.936ZM9.98314 13.6C8.00314 13.6 6.38314 11.98 6.38314 10C6.38314 8.02002 8.00314 6.40002 9.98314 6.40002C11.9631 6.40002 13.5831 8.02002 13.5831 10C13.5831 11.98 11.9631 13.6 9.98314 13.6Z"
                                fill="#000000DE"
                                fillOpacity="0.87"
                            />
                        </svg>
                    </div>
                </div>
                <p className="serial">S1.4.I14-9.001 00-024004</p>
                <div
                    className="device-actions"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div>Работа прибора</div>
                        <svg
                            width="10"
                            height="5"
                            viewBox="0 0 10 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0L5 5L10 0H0Z"
                                fill="black"
                                fillOpacity="0.87"
                            />
                        </svg>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: '8px' }}
                        >
                            <path
                                d="M20 4.71998L15.4 0.859985L14.11 2.38999L18.71 6.24998L20 4.71998ZM5.88 2.38999L4.6 0.859985L0 4.70998L1.29 6.23998L5.88 2.38999ZM10 2.99998C5.03 2.99998 1 7.02998 1 12C1 16.97 5.02 21 10 21C14.97 21 19 16.97 19 12C19 7.02998 14.97 2.99998 10 2.99998ZM10 19C6.13 19 3 15.87 3 12C3 8.12998 6.13 4.99998 10 4.99998C13.87 4.99998 17 8.12998 17 12C17 15.87 13.87 19 10 19ZM8.54 13.53L6.41 11.4L5.35 12.46L8.53 15.64L14.53 9.63999L13.47 8.57998L8.54 13.53Z"
                                fill="black"
                                fillOpacity="0.87"
                            />
                        </svg>
                        <button
                            className="action-button save-pdf"
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            СОХРАНИТЬ PDF
                            <svg
                                width="4"
                                height="16"
                                viewBox="0 0 4 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                                    fill="#23B04A"
                                    fill-opacity="0.87"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="dateTime">
                    <DateStartEnd></DateStartEnd>
                </div>
                <div className="timesChipsLong">
                    <TimeFilters></TimeFilters>
                </div>
                <TaskList user={user}></TaskList>
            </div>
        </Layout>
    )
}
