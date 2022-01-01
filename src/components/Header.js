import React from 'react';
import logo from '../logo.svg';

const Header = ({children}) => {
    return (
      <header>
        <div className='header'>
          <img alt='logo' src={logo} className='logo'/>
          {children}
        </div>
      </header>
    )
  }

export default Header;