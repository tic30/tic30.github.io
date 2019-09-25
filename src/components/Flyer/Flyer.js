import React, { Component } from 'react';
import './Flyer.scss';

class Flyer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.nav = React.createRef();
    // }

    // componentDidMount() {
    //     let lastScrollTop = 0,
    //         myself = this;

    //     // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    //     document.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
    //         let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //         if (st > lastScrollTop) {
    //             // downscroll code
    //             myself.nav.current.classList.add("scrolled");
    //         } else {
    //             // upscroll code
    //             myself.nav.current.classList.remove("scrolled");
    //         }
    //         lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    //     }, false);
    // }

    render() {
        const { direction, animated, content, callFlyer } = this.props;

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
                            return (
                                <div key={index} className="flyer-icon" data-target={icon.dataTarget} onClick={callFlyer}>
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
