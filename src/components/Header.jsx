import { Link } from "react-router-dom";
// StyleSheets
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
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/calculator" className="nav-link">Calculator</Link></li>
            <li><Link to="/quote" className="nav-link">Quote</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;