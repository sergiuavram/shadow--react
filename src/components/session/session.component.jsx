import React from 'react';
import './session.style.scss';

import GMap from '../gmap/gmap.componenet';

const Session = () => {

    return (
        <div className="session">
            <h1 className='title'>Session Name</h1>
            <div className="stats">
                <div className="distance">
                    <p>Distance</p>
                    <p>12.3 km</p>
                </div>
                <div className="time">
                    <p>Time</p>
                    <p>1h 02m 07s</p>
                </div>
                <div className="arg-speed">
                    <p>Avr. Speed</p>
                    <p>11.9 km/h</p>
                </div>
            </div>
            <GMap />
        </div>
    );
};

export default Session;
