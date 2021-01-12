import React from 'react';
import './logo.style.scss';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo80.png';

const Logo = () => {

    return (
        <div className="logo">
            <Link to='/'>
                <img src={logo} alt="shadow logo" />
            </Link>
        </div>
    );
};

export default Logo;