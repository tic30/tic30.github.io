import React from 'react';
import './MenuScreen.scss';

const MenuScreen = (props) => {
    return (
        <div className={`global-menu ${props.direction} ${props.open ? 'open' : ''}`}>
            <div className="global-menu-inner">
                {props.children}
            </div>
        </div>
    );
};

export default MenuScreen;
