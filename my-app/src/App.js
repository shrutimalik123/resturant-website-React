import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header';
import AboutUs from './container/AboutUs/AboutUs';
import SpecialMenu from './container/Menu/SpecialMenu';
import './App.css';

const App = () => (
  <div>
    <Navbar/>
    <Header/>
    <AboutUs/>
    <SpecialMenu/>
  </div>
);

export default App;