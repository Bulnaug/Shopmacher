import React from 'react';
import TopBar from './Topbar/topbar';
import HeaderBody from './HeaderBody/headerBody';
import Navigation from './Navigation/navigation';
import './header.css';



const Header = () => {
  return (
      <header className="App-header">
        <TopBar />
        <HeaderBody />
        <Navigation />


      </header>
  );
}

export default Header;