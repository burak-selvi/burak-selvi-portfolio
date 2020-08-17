import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ text, to }) {
  const handleMenuItemClick = () => {};

  return (
    <li className="link-item">
      <Link to={to} onClick={handleMenuItemClick} className="link">
        {text}
      </Link>
    </li>
  );
}
