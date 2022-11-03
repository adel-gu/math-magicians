import "../styles/Header.css";

const Header = () => {
  const FooterBackground = {
    backgroundColor: "red",
    marginTop: '10px',
    borderRadius: "100px",
    paddingInline: "1em"
  }
  return (
    <header className="header">
      <div className="container flex justify-between align-center" style={FooterBackground}>
        <a href="/" className="logo"><h3>Math Magicians</h3></a>
        <nav>
          <ul className="flex gap-3">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/calculator" className="nav-link">Calculator</a></li>
            <li><a href="/quote" className="nav-link">Quote</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;