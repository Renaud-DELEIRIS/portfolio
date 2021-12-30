import React from 'react'
import scroll from './scroll.svg'

const Footer = (props) => {
    const {height} = props
    return (
      <footer style={{bottom: height}}>
        <div className='footer'>
          <img alt='scroll' src={scroll} className='scroll'/>
        </div>
      </footer>
    )
}

export default Footer;