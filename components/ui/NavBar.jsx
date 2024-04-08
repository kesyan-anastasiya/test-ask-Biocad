const React = require('react')

module.exports = function NavBar({ user }) {
    const isBrowser = typeof window !== 'undefined'
    const isActive = isBrowser && window.location.pathname === '/'
    return (
        <header className="header">
            <div className="logo">
                <span className="logo-text">botanique</span>
            </div>
            <nav className="navbar">
                <ul class="nav-list">
                    <li class="nav-item">
                        {
                            <a
                                className={
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                                href="/"
                            >
                                Главная
                            </a>
                        }
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="/analytics">
                            Аналитика
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="user-controls">
                <img
                    src="/img/255f85b1e3bdf6e49483676d61604df6.png"
                    className="user"
                    alt="user"
                />
            </div>
        </header>
    )
}
