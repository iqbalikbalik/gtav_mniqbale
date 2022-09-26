import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Footer, Header, Navbar } from './components';
import { Home, Media, Food, Money, Travel, Fashion, Direct } from './pages';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <Header />
        <Navbar />
        <div className='eyefind__main border-wrapper'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="media" element={<Media />} />
                <Route path="food" element={<Food />} />
                <Route path="money" element={<Money />} />
                <Route path="travel" element={<Travel />} />
                <Route path="fashion" element={<Fashion />} />
                
                {/* Direct to 404 */}
                <Route path="*" element={<Direct />} />
            </Routes>
        </div>
        <Footer />
    </div>
  )
}

export default App