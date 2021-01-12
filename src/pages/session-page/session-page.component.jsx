// this page display just on detailed sesion
import React from 'react';
import './session-page.style.scss';

import GMap from '../../components/gmap/gmap.componenet';

const SessionPage = () => {

    return (
        <div className="session-page">
            <h1 className='title'>Session Title</h1>
            <GMap />
            <div className="stats">
                <div className="row">
                    <div className=""></div>
                    <div className="distance">
                        <p>Distance</p>
                        <p>13.2 km</p>
                    </div>
                    <div className="divider-verticaly"></div>
                    <div className="elevation">
                        <p>Elevation</p>
                        <p>320 m</p>
                    </div>
                    <div className=""></div>
                </div>
                <div className="divider-horizontaly"></div>
                <div className="row">
                    <div className=""></div>
                    <div className="Time">
                        <p>Time</p>
                        <p>1h 08m 58s</p>
                    </div>
                    <div className="divider-verticaly"></div>
                    <div className="avr-speed">
                        <p>Avr Speed</p>
                        <p>11.9 km/h</p>
                    </div>
                    <div className=""></div>
                </div>
                <div className="divider-horizontaly"></div>
                <div className="row">
                    <div className=""></div>
                    <div className="Max Elevation">
                        <p>Max Elevation</p>
                        <p>273 km</p>
                    </div>
                    <div className="divider-verticaly"></div>
                    <div className="max-speed">
                        <p>Max Speed</p>
                        <p>15.2 km/h</p>
                    </div>
                    <div className=""></div>
                </div>

            </div>
            <div className="comment">
                This is how I felt doring this and about this race
            </div>
        </div>
    );
};

export default SessionPage;