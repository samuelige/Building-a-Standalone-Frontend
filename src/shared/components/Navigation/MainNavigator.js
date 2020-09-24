import React from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";

import "./MainNavigator.css";
import NavLinks from "./NavLinks";
const MainNavigator = (props) => {
  return (
    <MainHeader>
      <button className='main-navigation__menu-btn'>
        <span />
        <span />
        <span />
      </button>
      <h1 className='main-navigation__title'>
        <Link to='/'>YourPlaces</Link>
      </h1>
      <NavLinks />
    </MainHeader>
  );
};

export default MainNavigator;
