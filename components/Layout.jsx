module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        {/* <script defer src="/scripts/add.js" /> */}
      </head>
      <body>
        <NavBar></NavBar>
        <body>{children}</body>
      </body>
    </html>
  );
};
