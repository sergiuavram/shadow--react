import React from 'react';
import './history.style.scss';

import Session from '../../components/session/session.component';

const History = () => {

    return (
        <div className="history">
            History
            <Session />
            <Session />
            <Session />
        </div>
    );
};

export default History;