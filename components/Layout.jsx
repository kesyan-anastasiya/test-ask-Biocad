const React = require('react')
const NavBar = require('./ui/NavBar')

module.exports = function Layout({ title, children }) {
    return (
        <html lang="en">
            <head>
                <title>{title}</title>
                <link rel="stylesheet" href="/styles/style.css" />
                <link rel="stylesheet" href="/styles/navbar.css" />
                <link rel="stylesheet" href="/styles/search.css" />
                <link rel="stylesheet" href="/styles/deviceList.css" />
                <link rel="stylesheet" href="/styles/analytics.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <NavBar></NavBar>
                <div>{children}</div>
            </body>
        </html>
    )
}
