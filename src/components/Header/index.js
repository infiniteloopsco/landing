import React from "react";
import Link from "gatsby-link";
import logo from "./logo.png";
import "./header.css";

const elements = [
  { to: "/features", key: "Features" },
  { to: "/pricing", key: "Pricing" }
  //{ url: "/marketplace", name: "marketplace" },
  // { url: "/about", name: "About" }
];
const Header = () => (
  <nav className="navigation">
    <div className="wrapper">
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="menu">
        {elements.map(element => <Link {...element}>{element.key}</Link>)}
        <Link to="/login">Try it out</Link>
      </div>
    </div>
  </nav>
);

export default Header;
