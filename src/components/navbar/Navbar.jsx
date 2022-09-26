import React from 'react';
import { MdPhoneIphone, MdFastfood, MdMonetizationOn, MdAirplaneTicket, MdShoppingBag } from "react-icons/md";
import { Outlet, NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  
  let activeStyle = {
    backgroundColor: 'rgba(78, 148, 201, 21%)',
  };

  return (
    <section class='eyefind__navbar border-wrapper'>
      <ul>
        <NavLink to="/media" style={({ isActive }) => isActive ? activeStyle : undefined}>
          <li>
            <MdPhoneIphone />
            <p>Media and entertainment</p>
          </li>
        </NavLink>
        <NavLink to="/food" style={({ isActive }) => isActive ? activeStyle : undefined}>
          <li>
            <MdFastfood />
            <p>Food and Drink</p>
          </li>
        </NavLink>
        <NavLink to="/money" style={({ isActive }) => isActive ? activeStyle : undefined}>
          <li>
            <MdMonetizationOn />
            <p>Money and Services</p>
          </li>
        </NavLink>
        <NavLink to="/travel" style={({ isActive }) => isActive ? activeStyle : undefined}>
          <li>
            <MdAirplaneTicket />
            <p>Travel and Transport</p>
          </li>
        </NavLink>
        <NavLink to="/fashion" style={({ isActive }) => isActive ? activeStyle : undefined}>
          <li>
            <MdShoppingBag />
            <p>Fashion and Heal th</p>
          </li>
        </NavLink>
      </ul>
      <Outlet />
    </section>
  )
}

export default Navbar