import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './YouTubePlayer.scss';

const opts = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
        enablejsapi: 1,
        rel: 0,
        iv_load_policy: 3
    }
};

class YouTubePlayer extends Component {
    constructor(props) {
        super(props);
        this.player = null;
		this.state = {
            width: 0,
			started: false
        }
    }
    
    _onReady = (event) => {
        // access to player in all event handlers via event.target
        this.player = event.target;
    }

    playVideo = () => {
        this.setState({started: true});
        this.player.playVideo();
    }

    _onEnd = () => {
        this.setState({started: false});
    }

    render() {
        const { started } = this.state;

        return (
            <div className="player-wrapper">
                <div className={`player-cover ${started ? 'hide' : ''}`} type="button" onClick={this.playVideo}>
                    <div className="player-cover-title">Q</div>
                    <hr />
                    <div className="player-cover-text">What problem to solve?</div>
                </div>
                <YouTube
                    videoId="b4Ro7i9c2QE"
                    opts={opts}
                    onReady={this._onReady}
                    onEnd={this._onEnd}
                />
            </div>
        );
    }
}

export default YouTubePlayer;
