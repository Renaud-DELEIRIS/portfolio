import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Carousel } from 'react-carousel-minimal';
import Footer from '../Footer'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import './Project.scss'

const Project = (props) => {
    const {background, title, description, github, images, learned, right} = props.data;
    const [carousel, setCarousel] = React.useState([])

    const redirect = (url) => {
        window.open(url, "_blank")
    }

    useEffect(() => {
        let res = []
        console.log(process.env)
        images.forEach(elem => {
            res.push({"image": process.env.PUBLIC_URL + '/' + elem.image})
        })
        setCarousel(res)
        console.log(res)
    }, [images])

    return (
        <div className='project' style={{background: `linear-gradient(290deg, ${background.sub} -19.51%, ${background.main} 66.42%`, flexDirection: right ? "row-reverse" : "row"}}>
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
                    {carousel.length && (<Carousel
                        data={carousel}
                        time={3000}
                        width="850px"
                        height="400px"
                        radius="10px"
                        automatic={true}
                        dots={true}
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            justifyContent: 'center',
                            width: "500px",
                            height: "400px",
                            margin: "40px auto",
                        }}
                    />)}
                </div>
            </Rotate>
            <Footer height={'calc(50px - 100vh)'}/>
        </div>
    );
};

export default Project;