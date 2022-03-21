import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import './YouTubePlayer.scss';

const opts = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
        enablejsapi: 1,
        rel: 0,
        iv_load_policy: 3
    }
};

const YouTubePlayer = () => {
    const [started, setStarted] = useState(false);
    const player = useRef(null);

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        player.current = event.target;
    };

    const playVideo = () => {
        setStarted(true);
        player.current.playVideo();
    };

    return (
        <div className="player-wrapper">
            <div className={`player-cover ${started ? 'hide' : ''}`} type="button" onClick={playVideo}>
                <div className="player-cover-title">Q</div>
                <hr />
                <div className="player-cover-text">What problem to solve?</div>
            </div>
            <YouTube
                videoId="b4Ro7i9c2QE"
                opts={opts}
                onReady={onReady}
                onEnd={() => setStarted(false)}
            />
        </div>
    );
};

export default YouTubePlayer;
