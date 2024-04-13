const React = require('react')

module.exports = function DateStartEnd() {
    return (
        <div className="date">
            <div className="date-start">
                <p className="body-date">07.10.2021, 10:55 </p>
                <svg
                    className="calendar"
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V7H18V20Z"
                        fill="black"
                        fill-opacity="0.87"
                    />
                </svg>
            </div>
            <div className="navigation">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                        fill="black"
                        fill-opacity="0.87"
                    />
                </svg>
            </div>
            <div className="date-end">
                <p className="body-date">21.10.2021, 10:55</p>
                <svg
                    className="calendar"
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V7H18V20Z"
                        fill="black"
                        fillOpacity="0.87"
                    />
                </svg>
            </div>
        </div>
    )
}
