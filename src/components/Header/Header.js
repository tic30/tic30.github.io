import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Box, colors } from '@mui/material';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SummarizeIcon from '@mui/icons-material/Summarize';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import CoffeeIcon from '@mui/icons-material/Coffee';
import MemoryIcon from '@mui/icons-material/Memory';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuScreen from '../MenuScreen';
import Texts from '../../texts';

const menuList = [{
    icon: <PersonIcon />,
    text: 'About Me',
    link: '/home#self-intro'
}, {
    icon: <DesignServicesIcon />,
    text: 'My work',
    link: '/home#work'
}, {
    icon: <BatchPredictionIcon />,
    text: 'Blog',
    link: '/home#blog'
}, {
    icon: <WorkspacesIcon />,
    text: 'Projects',
    link: '/home#projects',
    subMenuItems: [{
        ...Texts.OH,
        icon: <MemoryIcon />
    }, {
        ...Texts.ITS,
        icon: <VisibilityIcon />
    }, { 
        title: 'Others',
        pageUrl: '/home#projects',
        icon: <MoreHorizIcon />
    }]
}, {
    icon: <CoffeeIcon />,
    text: 'Connect',
    link: '/home#connect',
    subMenuItems: [{
        icon: <SummarizeIcon />,
        title: 'Resume',
        pageUrl: 'https://drive.google.com/open?id=0B1dSWHM51dn-RGJBNlJZNFdaNW8',
        external: true
    }, {
        icon: <LinkedInIcon />,
        title: 'LinkedIn',
        pageUrl: 'https://www.linkedin.com/in/tim-chu-980881a4',
        external: true
    }, {
        icon: <GitHubIcon />,
        title: 'GitHub',
        pageUrl: 'https://github.com/tic30',
        external: true
    }]
}];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            scrolled: false
        }
        this.scrollListener = null;
        this.toggleMenuScreen = this.toggleMenuScreen.bind(this);
        this.logoClickHandler = this.logoClickHandler.bind(this);
    }

    componentDidMount() {
        let lastScrollTop = 0;
        const mySelf = this;

        // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
        this.scrollListener = () => { // or window.addEventListener("scroll"....
            const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop) {
                // downscroll code
                mySelf.setState({
                    scrolled: true
                })
            } else {
                // upscroll code
                mySelf.setState({
                    scrolled: false
                })
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }

        document.addEventListener("scroll", this.scrollListener, false);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollListener);
    }

    toggleMenuScreen() {
        const { menuOpen } = this.state;

        this.setState({
            menuOpen: !menuOpen
        });
    }

    logoClickHandler(e) {
        const { pageId } = this.props;

        if (pageId === "home") {
            e.preventDefault();
            window.scrollTo({
                top: document.documentElement.offsetTop,
                left: 0,
                behavior: 'smooth',
            });
        }
    }

    render() {
        const { menuOpen } = this.state;

        return (
            <>
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4.5rem',
                    backgroundColor: 'white',
                    boxShadow: `0 1px 5px ${colors.grey[300]}`,
                    zIndex: 9,
                    transitionDuration: '0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    pl: menuOpen ? '24rem' : '7.5rem',
                    transition: 'padding 0.2s',
                }}>
                    {/* <Box 
                        component={HashLink}
                        to="/home"
                        onClick={this.logoClickHandler} 
                        sx={{
                            width: '3rem',
                            height: '3rem',
                            backgroundImage: 'url(/favicon.png)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    /> */}
                </Box>
                <MenuScreen open={menuOpen} setOpen={this.toggleMenuScreen} openDirection="left" justifyDirection="left" menuList={menuList} />
            </>
        );
    }
}

export default Header;
