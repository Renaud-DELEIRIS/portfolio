import React from 'react';
import './Contact.scss'
import Header from '../components/Header'
import Volcano from '../components/Volcano';
import Slider from '@mui/material/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faMobileAlt, faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const AdjustNb = () => {
    const [number, setNumber] = React.useState(15);

    const handleSliderChange = (event, newValue) => {
        setNumber(newValue);
    };

    return (
        <>
            <Slider
                value={number}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                min={0}
                max={150}
            />
            <style>
                {
                [...Array(number).keys()].map(elem => {
                    return (
                        `.hearth-${elem} {
                            visibility: visible;
                        }`
                    )
                })}
            </style>
        </>
    )
}

const Contact = ({changePage}) => {    
    return (
        <div className='contact'>
            <Header>
                <a onClick={() => changePage(0)}>FRONT</a>
            </Header>
            <div className='container'>
                <div className='information'>
                    <div className='title'>
                        Me contacter:
                    </div>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faMapMarkedAlt}/> &nbsp; Adresse: 54 avenue Marc Sangnier Villeurbanne 69100 France
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMobileAlt}/> &nbsp; Téléphone: +33 6 67 10 60 44
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope}/> &nbsp; Email: renaud.de-leiris@epitech.eu
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGraduationCap}/> &nbsp; École: Epitech Lyon
                        </li>
                    </ul>
                </div>
                <div className='right'>
                    <Volcano/>
                    <div className='slider'>
                        <AdjustNb/>
                    </div>
                </div>
            </div>
            <div className='blackback'>
              <div className='background'>
                  <img alt="style" src='/assets/style/whiteCube.png'/>
                  <img alt="style" src='/assets/style/purpleBig.png'/>
                  <img alt="style" src='/assets/style/purpleSmall.png'/>
              </div>
            </div>
        </div>
    );
};

export default Contact;