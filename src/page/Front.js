import React from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Typewriter } from 'react-simple-typewriter'

const Front = ({changePage, maxPage}) => {
    const redirect = (url) => {
        window.open(url, "_blank")
      }

    return (
        <div className='frontPage'>
          <div className='content'>
            <Header>
              <a onClick={() => changePage(maxPage)}>CONTACT</a>
            </Header>
            <Footer height={'50px'}/>
            <div className='container'>
              <div className='ressource'>
                <div className='presentation'>
                  <div className='text'>
                    <span className='hello'>Bienvenue !</span>
                    <span className='sign'>-Renaud de LEIRIS</span>
                  </div>
                  <div className='right'>
                    <span className='competence'>
                      <Typewriter
                        words={['Fullstack', 'C++', 'GIT']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                      />
                    </span>
                  </div>
                </div>
                <div className='navigation'>
                  <img alt='github' src={"/assets/github.svg"} className='icon' onClick={() => {redirect("https://github.com/Renaud-DELEIRIS")}}/>
                  <img alt='linkedin' src={"/assets/linkedin.svg"} className='icon' onClick={() => {redirect("https://www.linkedin.com/in/renaud-de-leiris-505a621b3/")}}/>
                </div>
              </div>
            </div>
            <div className='blackback'>
              <div className='background'>
                <img alt="purplepolygon" src="/assets/purplePolygon.png"/>
                <img alt="whiteCube" src="/assets/purplePolygon.png"/>
                <img alt="blackCube" src="/assets/blackCube.png"/>
                <img alt="whiteTic" src="/assets/whiteTic.png"/>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Front;