import React from 'react'

const Footer = (props) => {
    const {height} = props
    return (
      <footer style={{bottom: height}}>
        <div className='footer'>
          <img alt='scroll' src={"/assets/scroll.svg"} className='scroll'/>
        </div>
      </footer>
    )
}

export default Footer;