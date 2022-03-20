import React, { Component } from 'react';
import Fab from '@mui/material/Fab';
import { ChatBubbleOutline, Clear } from '@mui/icons-material';
import MenuScreen from '../MenuScreen';
import './ContactBubble.scss';

class ContactBubble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.bubble = React.createRef();
        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup() {
        const { open } = this.state; 

        this.setState({
            open: !open
        })
    }

    render() {
        const { open } = this.state;
        let button;
        if (open) {
            button = <Clear></Clear>;
        } else {
            button = <ChatBubbleOutline></ChatBubbleOutline>;
        }

        return (
            <div className="contact-wrapper">
                <div className={`contact-bubble ${open ? 'open' : ''}`} ref={this.bubble}>
                    <Fab className="contact-bubble-cta" onClick={this.togglePopup}>
                        {button}
                    </Fab>
                </div>
                <MenuScreen open={open} openDirection="right" justifyDirection="right">
                    <div className="menu-item">
                        <a href="https://www.linkedin.com/in/tim-chu-980881a4" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn">
                            <img src="/imgs/icons/linkedin.svg" alt="LinkedIn Icon" />
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="https://github.com/tic30" target="_blank" rel="noopener noreferrer" title="Connect with me on GitHub">
                            <img src="/imgs/icons/github.svg" alt="GitHub Icon" />
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="mailto:173341277@qq.com?subject=Let\'s&nbsp;talk,&nbsp;Tim!" target="_blank" rel="noopener noreferrer"  title="Email me">
                            <img src="/imgs/icons/email.svg" alt="Email Icon" />
                        </a>
                    </div>
                </MenuScreen>
            </div>
        );
    }
}

export default ContactBubble;
