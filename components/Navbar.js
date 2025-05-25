import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "1rem", color: "white" }}>
      <span style={{ fontWeight: "bold", marginRight: "1rem" }}>
        Caffeine Corner
      </span>
      <Link to="/" style={{ color: "white", marginRight: "1rem" }}>
        Home
      </Link>
      <Link to="/services" style={{ color: "white", marginRight: "1rem" }}>
        Products
      </Link>
      <Link to="/contact" style={{ color: "white" }}>
        Contact
      </Link>
    </nav>
  );
}
