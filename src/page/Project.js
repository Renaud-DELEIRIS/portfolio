import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Footer from '../Footer'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import './Project.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Project = (props) => {
    const {background, title, description, github, images, learned, right} = props.data;

    const redirect = (url) => {
        window.open(url, "_blank")
    }

    return (
        <div className='project' style={{background: `linear-gradient(${right ? '290' : '110'}deg, ${background.sub} -19.51%, ${background.main} 66.42%`, flexDirection: right ? "row-reverse" : "row"}}>
            <Fade top>
                <div className='information'>
                    <span className='title'>{title}</span>
                    <span className='description'>{description}</span>
                    <div className='github' style={{background: background.main}} onClick={() => {redirect(github)}}>
                        <span className='text'>voir sur github &nbsp;<FontAwesomeIcon icon={faGithub}/></span>
                    </div>
                </div>
            </Fade>
            <Rotate top left={right ? true : false} right={right ? false : true}>
                <div className='inside'>
                    <Carousel>
                    {images.map((elem, key) => {
                        return(
                            <div key={key}>
                                <img alt="slide" src={elem.image} className='slider'/>
                            </div>
                        )
                    })}
                    </Carousel>
                    <div className='learned'>
                        Ce que j'ai appris
                        <ul>
                            {learned.map((elem, key) => {
                                return(
                                    <Fade left delay={1000 + 500 * (key)} key={key}>
                                        <li>{elem}</li>
                                    </Fade>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </Rotate>
            <Footer height={`calc(50px - ${(props.index + 1) * 100}vh)`}/>
        </div>
    );
};

export default Project;