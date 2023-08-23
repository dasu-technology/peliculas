// Navbar.tsx

import React from 'react';

// Define the props for the Navbar component
interface NavbarProps {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-title">
          <h1>{title}</h1>
        </div>
        <div className="navbar-links">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;