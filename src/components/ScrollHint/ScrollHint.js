import React, { Component } from 'react';
// import Fab from '@material-ui/core/Fab';
// import Button from '@material-ui/core/Button';
// import { ChatBubbleOutline, Clear } from '@material-ui/icons';
import './ScrollHint.scss';

class ScrollHint extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         open: false
    //     }
    //     this.bubble = React.createRef();
    //     this.popup = React.createRef();
    //     this.togglePopup = this.togglePopup.bind(this);
    // }

    render() {
        return (
            <div className="scrollHint-wrapper">
                <div className="scrollHint"></div>
            </div>
        );
    }
}

export default ScrollHint;
