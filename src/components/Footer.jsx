// Stylesheets
import "../styles/Footer.css"

const Footer = () => {
  const FooterBackground = {
    backgroundColor: "red",
    marginBottom: "10px",
    borderRadius: "100px",
    paddingInline: "1em"
  }
  return (
    <footer className="footer" >
      <div className="container py-2" style={FooterBackground}>
        <span>Build by <a href="https://github.com/adel-gu">Adel Guitoun ❤️</a></span>
      </div>
    </footer>
  )
}

export default Footer;