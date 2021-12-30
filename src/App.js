import logo from './logo.svg';
import './App.css';
import { Typewriter } from 'react-simple-typewriter'
import ReactPageScroller from "react-page-scroller";
import github from './github.svg'
import linkedin from './linkedin.svg'
import purplePolygon from './purplePolygon.png'
import whiteCube from './whiteCube.png'
import blackCube from './blackCube.png'
import whiteTic from './whiteTic.png'
import React from 'react'
import Project from './page/Project'
import Projects from './Projects.json'
import Footer from './Footer'

const Header = () => {
  return (
    <header>
      <div className='header'>
        <img alt='logo' src={logo} className='logo'/>
        <a href='#contact'>CONTACT</a>
      </div>
    </header>
  )
}

function App() {
  const [page, setPage] = React.useState(0)
  const redirect = (url) => {
    window.open(url, "_blank")
  }

  const handlePageChange = (number) => {
    setPage(number)
  }

  return (
    <div className="App">
      <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={page}
        >
        <div className='frontPage'>
          <div className='content'>
            <Header/>
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
                  <img alt='github' src={github} className='icon' onClick={() => {redirect("https://github.com/Renaud-DELEIRIS")}}/>
                  <img alt='linkedin' src={linkedin} className='icon' onClick={() => {redirect("https://www.linkedin.com/in/renaud-de-leiris-505a621b3/")}}/>
                </div>
              </div>
            </div>
            <div className='blackback'>
              <div className='background'>
                <img alt="purplepolygon" src={purplePolygon}/>
                <img alt="whiteCube" src={whiteCube}/>
                <img alt="blackCube" src={blackCube}/>
                <img alt="whiteTic" src={whiteTic}/>
              </div>
            </div>
          </div>
        </div>
        {Projects.data.map((elem, index) => {
          return (<Project data={elem} key={elem.title} index={index}/>)
        })}
      </ReactPageScroller>
    </div>
  );
}

export default App;
