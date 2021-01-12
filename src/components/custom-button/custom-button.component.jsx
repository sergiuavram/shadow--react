import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ text, click, ...props }) => {

    const handleClick = (e) => {
        e.preventDefault();
        click ? click() : console.log('click');
    }

    return (
        // <div className="custom-button" style={

        //     {
        //         padding: '5px 10px',
        //         ...props,
        //         "&:hover": {
        //             backgroundColor: 'purple'
        //         }
        //     }
        // }
        //     onClick={handleClick}
        // >
        //     {text}
        // </div>
        <button
            style={{
                padding: '5px 10px',
                ...props,
            }}
            onClick={handleClick}
        >
            <span>
                {text}
            </span>
        </button>
    );
};

export default CustomButton;