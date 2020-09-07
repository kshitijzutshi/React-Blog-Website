import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    title: "Login",
    path: "/login",
  },
];
export default function Navigation() {
  return (
    <nav className="site-navigation">
      <span className="menu-title">React Blog</span>
      <div>
        <ul>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
