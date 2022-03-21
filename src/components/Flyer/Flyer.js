import React, { Component } from 'react';
import { Box } from '@mui/material';
import './Flyer.scss';

class Flyer extends Component {
    render() {
        const { direction, animated, content, callFlyer, current } = this.props;

        return (
            <Box className={`flyer flyer-${  direction  }${animated ? "" : " noanimation"}`}>
                <Box className="flyer-inner">
                    {content.titleIcon &&<Box className="flyer-title-icon">
                        <img src={`/imgs/${  content.titleIcon}`} alt="Flyer Title Icon" />
                    </Box>}
                    <h3>{content.title}</h3>
                    <p className={animated ? "animated" : ""}>{content.content}</p>
                    <Box className="icons">
                        {content.icons && content.icons.map((icon, index) => {
                            const active = current === icon.dataTarget;

                            return (
                                <Box key={index} className={`flyer-icon${active ? " flyer-icon-active" : ""}`} data-target={icon.dataTarget} onClick={callFlyer} sx={ active ? {
                                    '&:last-child::after': {
                                        background: 'url(/imgs/icons/arrows-down.png)'
                                    }
                                } : {}}>
                                    <img src={`/imgs/${icon.src}`} alt="Flyer Icon" />
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default Flyer;
