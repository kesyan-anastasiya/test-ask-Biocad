const React = require("react");

module.exports = function NavBar({ user }) {
  console.log(user);
  return (
    <header className="header">
      <div className="logo">botanique</div>
      <nav className="navigation">
        <a className="nav-link active" href="/">
          Главная
        </a>
        <a className="nav-link" href="/analytics">
          Аналитика
        </a>
      </nav>

      <div className="user-controls">
        <img
          src="/img/255f85b1e3bdf6e49483676d61604df6.png"
          className="user"
          alt="user"
        />
      </div>
    </header>
  );
};
