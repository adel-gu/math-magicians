import { Link } from "react-router-dom";
// StyleSheets
import "../styles/Header.css";

const Header = () => {
  const mt = {
    marginTop: "10px",
  }
  return (
  <header className="header">
    <div className="container header-footer flex justify-between align-center" style={mt}>
      <h3>Math 🧙 Magicians</h3>
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