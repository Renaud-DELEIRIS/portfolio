import React from 'react';

const Header = ({children}) => {
    return (
      <header>
        <div className='header'>
          <img alt='logo' src={"/assets/logo.svg"} className='logo'/>
          {children}
        </div>
      </header>
    )
  }

export default Header;