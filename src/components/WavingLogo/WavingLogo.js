import React, { useState, useEffect, useRef } from 'react';
import './WavingLogo.scss';

const WavingLogo = ({ disabled }) => {
    const [timeouts, updateTimeouts] = useState([]);
    const hand = useRef(null);
    const smile = useRef(null);

    useEffect(() => {
        return () => {
            timeouts.forEach((item) => {
                clearTimeout(item);
            });
        } // eslint-disable-next-line
    }, []);

    const logoHover = () => {
        if(disabled) return;
		hand.current.classList.remove("animated", "handTada");
		hand.current.classList.add("visible", "animated", "handTada");
		smile.current.classList.add("visible");
	};

	const logoHoverEnd = () => {
        if(disabled) return;
		const timeout1 = setTimeout(function () {
			hand.current.classList.remove("visible", "animated", "handTada");
			smile.current.classList.remove("visible");
		}, 800);
		updateTimeouts([...timeouts, timeout1]);
	};

    const fragmentStyle = {
        display: disabled ? 'none' : 'block'
    }

    return (
        <div id="img-container" onMouseEnter={logoHover} onMouseLeave={logoHoverEnd}>
            <img id="chu-logo" src="/imgs/chu-logo.png" alt="Loading Logo..." />
            <div id="hand" ref={hand} style={fragmentStyle}><img src="/imgs/hand.png" alt="Loading hand..." /></div>
            <img id="smile" src="/imgs/smile.png" alt="Loading smile..." ref={smile} style={fragmentStyle} />
        </div>
    );
};

export default WavingLogo;
