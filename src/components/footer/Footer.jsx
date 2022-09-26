import React from 'react';
import { RiGithubFill, RiSteamFill, RiPlaystationFill } from "react-icons/ri";
import './Footer.css';

const Footer = () => {
  return (
    <section className='eyefind__footer border-wrapper'>
      <p>Unofficial GTA V Website in Game</p>
      <p className='dev-by'>Developed by <span>
        <a href="https://mniqbale.com" target="_blank" rel="noopener noreferrer">
        mniqbale
        </a>
        </span></p>
      <div className='eyefind__footer-icon'>
        <RiGithubFill />
        <RiPlaystationFill />
        <RiSteamFill />
      </div>
    </section>
  )
}

export default Footer