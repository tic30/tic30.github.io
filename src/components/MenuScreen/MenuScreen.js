import React from 'react';
import './MenuScreen.scss';

const MenuScreen = (props) => (
        <div className={`global-menu ${props.openDirection} justify-${props.justifyDirection} ${props.open ? 'open' : ''}`}>
            <div className="global-menu-inner">
                {props.children}
            </div>
        </div>
    );

export default MenuScreen;
