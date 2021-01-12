import React from 'react';
import './custom-input.style.scss';

const CustomInput = ({ value, handleChange, placeholder, onChange, type, errMsg, error, ...props }) => {

    return (
        <div className="custom-input">
            <input
                style={{ ...props }}
                placeholder={`${placeholder}...`}
                value={value}
                onChange={onChange}
                type={type}
            />
            <div className="empty"
                style={{ display: error ? '' : 'none' }}
            >
                {errMsg}
            </div>
        </div>
    );
};

export default CustomInput;