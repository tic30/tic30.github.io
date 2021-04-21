import React, { useState, useEffect, useRef } from 'react';
import ReactCardFlip from 'react-card-flip';
import WavingLogo from '../WavingLogo';
import './Maintenance.scss';

const Maintenance = () => {
    const [isFlipped, updateIsFlipped] = useState(false);
    const [eyeHiden, updateEyeHidden] = useState(false);
    const [transformX, updateTransformX] = useState(0);
    const [transformY, updateTransformY] = useState(0);
    const buttonRef = useRef(null);

    const mouseTracker = (e) => {
        updateTransformX((e.offsetX - window.innerWidth / 2.0) / window.innerWidth * 10);
        updateTransformY((e.offsetY - window.innerHeight / 2.0) / window.innerHeight * 5);
    };

    const mouseOverhandler = () => updateEyeHidden(true);
    const mouseLeavehandler = () => updateEyeHidden(false);

    useEffect(() => {
        const button = buttonRef.current;
        window.addEventListener('mousemove', mouseTracker);
        button.addEventListener('mouseover', mouseOverhandler);
        button.addEventListener('mouseleave', mouseLeavehandler);

        return (() => {
            window.removeEventListener('mousemove', mouseTracker);
            button.removeEventListener('mouseover', mouseOverhandler);
            button.removeEventListener('mouseleave', mouseLeavehandler);
        })
    }, []);

    const transformedStyle = {
        display: eyeHiden || isFlipped ? 'none' : 'block',
        transform: `translate(${transformX}px, ${transformY}px)`
    };

    return (
        <div className="maintenance-page">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <button className="maintenance-logo-button maintenance-logo-button-front" onClick={() => updateIsFlipped(!isFlipped)} ref={buttonRef}>
                    <WavingLogo disabled={isFlipped}/>
                    <div className="eyeball eyeball-left" style={transformedStyle}></div>
                    <div className="eyeball eyeball-right" style={transformedStyle}></div>
                </button>
                <button className="maintenance-logo-button maintenance-logo-button-back" onClick={() => updateIsFlipped(!isFlipped)}>
                    <h1>Closed</h1>
                    <h4>I'll see you when I see you</h4>
                </button>
            </ReactCardFlip>
        </div>
    )
};

export default Maintenance;
