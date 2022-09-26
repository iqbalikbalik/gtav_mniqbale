import React, { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";

import {default as Logo} from '../../assets/eyefind-logo.png';
import { LiveDate, SearchBar } from '../../components'

import './Header.css';

const Header = () => {

  // Search Input Not Working
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");

  return (
    <section class='eyefind__header border-wrapper'>
      <div className='eyefind__header-top'>
        <div className='eyefind__header-top_logo'>
          <NavLink to="/">
            <img src={Logo} alt="Logo Eyefind GTA V" />
          </NavLink>
          <Outlet />
        </div>
        <LiveDate />
      </div>
      <div className="eyefind__header-bottom">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      </div>
    </section>
  )
}

export default Header