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

                {/* <script defer src="/scripts/add.js" /> */}
            </head>
            <body>
                <NavBar></NavBar>
                <body>{children}</body>
            </body>
        </html>
    )
}
