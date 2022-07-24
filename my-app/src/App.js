import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header';
import AboutUs from './container/AboutUs/AboutUs';
import SpecialMenu from './container/Menu/SpecialMenu';
import Chef from './container/Chef/Chef';
import './App.css';

const App = () => (
  <div>
    <Navbar/>
    <Header/>
    <AboutUs/>
    <SpecialMenu/>
    <Chef/>
  </div>
);

export default App;