import { Link } from "react-router-dom";

export default function NavLinks({ className }) {
  return (
    <nav className={className}>
      <Link to="/shop">Shop</Link>
      <Link to="/">About us</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
}
