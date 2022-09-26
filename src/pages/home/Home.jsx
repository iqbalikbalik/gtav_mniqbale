import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <section className='eyefind__home'>
      <div className='eyefind__home-top'>
        <div className='eyefind__home-top-left'>
          <div className='containers eyefind__home-top-left_articles'>
            <div className='article__head'>
              <div className='article__title'>
                <h1>News Story of the day</h1>
                <h2>Arms trafficking skyrockets in desert region.</h2>
              </div>
              <div className='article__img'>
                <img src="https://dunqm0.csb.app/media/images/senora-beacon.png" alt="" />
              </div>
            </div>
            <p className='article__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.</p>
            <button className='article__button'>READ FULL ARTICLE</button>
          </div>
          <div className='containers eyefind__home-top-left_ads'>
            <h1>Website of the minute</h1>
            <div className='ads__content'>
              <div className='ads__content-img'>
                <img src="https://dunqm0.csb.app/media/images/junk-energy.png" alt="" />
              </div>
              <div className='ads__content-desc'>
                <p className='ads__content-desc_url'>www.Junkenergydrink.com</p>
                <p className='ads__content-desc_seo'>Junk - all the calories, sugar and caffeine you
                need to live life at 120mph. Plug in. Charge up. Get weird. Play hard. Sweat hard.
                Stay hard. Crank the ignition. Shift up. Accelerate life.<br /><span>Junk Energy Drink every
                day, Boost up your life!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='eyefind__home-top-right'>
          <div className='eyefind__home-top-right_sponsor'>
            <h1>Sponsored Advert</h1>
            <img src="https://dunqm0.csb.app/media/images/lenny-avery.png" alt="" />
          </div>
          <div className='containers eyefind__home-top-right_bleets'>
            <h1>Recent Bleets</h1>
            <div className='bleets'>
              <p className='bleets__user'>@traceydesanta</p>
              <p className='bleets__tweets'>Could someone please give me directions to my happy place?</p>
            </div>
            <div className='bleets'>
              <p className='bleets__user'>@slappaball2</p>
              <p className='bleets__tweets'>#Themostridiculouslylonghastagever</p>
            </div>
            <div className='bleets'>
              <p className='bleets__user'>@PhilipsTrevor</p>
              <p className='bleets__tweets'>Fuckin kidding me kid? Eyefind such a horny place <span>@mniqbale</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className='containers eyefind__home-bottom'>
        ON DEVELOPMENT
      </div>
    </section>
  )
}

export default Home