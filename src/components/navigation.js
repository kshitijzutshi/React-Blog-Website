import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

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
    <nav className="site-navigation" role="navigation">
      <span className="menu-title">React Blog</span>
      <div className="menu-content-container">
        <ul>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <span>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={38}
          />
          <span>KaiZen</span>
        </span>
      </div>
    </nav>
  );
}
