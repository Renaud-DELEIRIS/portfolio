import React from 'react';
import './Contact.scss'
import Header from '../components/Header'
import purplePolygon from '../purplePolygon.png'
import whiteCube from '../whiteCube.png'
import blackCube from '../blackCube.png'
import whiteTic from '../whiteTic.png'
import Volcano from '../components/Volcano';
import Slider from '@mui/material/Slider';

const AdjustNb = () => {
    const [number, setNumber] = React.useState(0);

    const handleSliderChange = (event, newValue) => {
        setNumber(newValue);
    };

    return (
        <>
            <Slider
                value={number}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
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

const Contact = () => {    
    return (
        <div className='contact'>
            <Header>
                <a href='#contact'>FRONT</a>
            </Header>
            <div className='container'>
                <div className='information'>

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
              </div>
            </div>
        </div>
    );
};

export default Contact;