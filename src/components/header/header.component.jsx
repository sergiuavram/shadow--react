import React from 'react';
import './header.style.scss';

import Logo from '../logo/logo.component';

const Header = () => {

    return (
        <div className="header">
            <div className="empty"></div>
            <Logo />
            <div className="menu">Mwnu</div>
        </div>
    );
};

export default Header;