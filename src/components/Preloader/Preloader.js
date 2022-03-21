import React, { useEffect, useState } from 'react';
import  { useNavigate } from 'react-router-dom';
import './Preloader.scss';

const Preloader = () => {
    const navigate = useNavigate();
    const [animationCount, setAnimationCount] = useState(0);
    const [redirect, setRedirect] = useState(window.matchMedia('(max-width: 599px)').matches); // Go directly to home on phone

    const updateRedirect = () => {
        if(animationCount>=2){
            setRedirect(true);
        } else {
            setAnimationCount(animationCount + 1);
        }
    }

    useEffect(() => {
        if (redirect) {
            navigate('/home');
        }
    }, [redirect]);

    return (
        <div className="preloader-wrapper">
            <div className="preloader-header" onAnimationEnd={updateRedirect}>
                <div className="preloader-header-text">Hello, this is Tim Chu</div>
            </div>
        </div>
    );
}

export default Preloader;
