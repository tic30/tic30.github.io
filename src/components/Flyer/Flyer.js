import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
        const { direction, animated, content } = this.props;

        return (
            <div className={"flyer flyer-" + direction + (animated==="true" ?"":" noanimation")}>
                <div className="flyer-inner">
                    <h1>{content.title}</h1>
                    <div className="hr"></div>
                    <p>{content.content}</p>
                    <div className="icons">
                        {content.icons && content.icons.map((icon, index) => {

                            return (
                                <div key={index} className="flyer-icon">
                                    <img src={"/imgs/" + icon.src} />
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
