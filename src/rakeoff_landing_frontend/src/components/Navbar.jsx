import React from 'react';
import { logo } from '../assets/';  

const Navbar = () => {
  return (
    <div>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
};

export default Navbar;
