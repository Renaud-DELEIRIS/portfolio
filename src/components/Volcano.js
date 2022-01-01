import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Volcano.scss'

const colorScheme = [
    "#9B0000",
    "#FF7272",
    "#FFB5B5"
]

const Volcano = () => {
    const [maxHearth, setMax] = React.useState(150);

    const HearthGenerator = () => {
        const res = []
        for (var i = 0; i < maxHearth; i++)
            res.push(<Hearth index={i}/>)
        return res;
    }

    const Hearth = ({index}) => {
        return (
            <div className={`hearth-${index}`} style={{animationDelay: Math.floor(Math.random() * 1000) + 'ms' }}>
                <FontAwesomeIcon style={{color: colorScheme[Math.floor(Math.random() * 3)]}} icon={faHeart}/>
            </div>
            )
    }

    return (
        <div className='volcanoContainer'>
            {HearthGenerator()}
        </div>
    );
};

export default Volcano;