import React, { Component } from 'react';
import './Flyer.scss';

class Flyer extends Component {
    render() {
        const { direction, animated, content, callFlyer, current } = this.props;

        return (
            <div className={"flyer flyer-" + direction + (animated ? "" : " noanimation")}>
                <div className="flyer-inner">
                    {content.titleIcon &&<div className="flyer-title-icon">
                        <img src={"/imgs/" + content.titleIcon} alt="Flyer Title Icon" />
                    </div>}
                    <h3>{content.title}</h3>
                    <p className={animated ? "animated" : ""}>{content.content}</p>
                    <div className="icons">
                        {content.icons && content.icons.map((icon, index) => {
                            const active = current === icon.dataTarget;

                            return (
                                <div key={index} className={`flyer-icon${active ? " flyer-icon-active" : ""}`} data-target={icon.dataTarget} onClick={callFlyer}>
                                    <img src={"/imgs/" + icon.src} alt="Flyer Icon" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Flyer;
