import React from 'react'
import './continue-with.style.scss';

import CustomButton from '../custom-button/custom-button.component';

const ContinueWith = () => {

    return (
        <div className="continue-with">
            <CustomButton
                text='Continue with Google'
                backgroundColor='#0040f1'
                width='200px'
                marginBottom='15px'
                cursor='no-drop'
            />
            <CustomButton
                text='Continue with Facebook'
                backgroundColor='#3B5998'
                width='200px'
                marginBottom='15px'
                cursor='no-drop'
            />
        </div>
    );
};

export default ContinueWith;