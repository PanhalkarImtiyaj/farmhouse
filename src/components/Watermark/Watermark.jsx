import React from 'react';
import './Watermark.css';

const Watermark = () => {
    return (
        <div className="watermark-container">
            <img
                src="/faram_house_logo.png"
                alt="Watermark"
                className="watermark-image"
            />
        </div>
    );
};

export default Watermark;
