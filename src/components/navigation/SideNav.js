import React, { Component } from 'react';
import '../css/SideNav.css';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    MDBIcon, 
    MDBSideNav, 
    MDBSideNavNav, 
    MDBSideNavLink,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem
} from 'mdbreact';

import HomePage from '../pages/HomePage';
import VoiceRecognition from '../pages/VoiceRecognition';
import Items from '../pages/Items';
import Maps from '../pages/Maps';
import CrucifixVerse from '../pages/CruifixVerse';
import Footer from '../sections/Footer';

class SideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleStateA: false,
            breakWidth: 1300,
            windowWidth: 0,
            switch2: false
        };
    }
    
    componentDidMount() {
        this._isMounted = true;
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    }
    
    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener("resize", this.handleResize);
    }
    
    handleResize = () => this.setState({ windowWidth: window.innerWidth });
    handleToggleClickA = () => this.setState({ toggleStateA: !this.state.toggleStateA });
    handleSwitchChange = nr => () => this.setState({ [`switch${nr}`]: !this.state[`switch${nr}`] });

    render() {
        const ghostToolClass = this.props.location.pathname !== "/" ? "non-homepage-link-fix" : ""
        const navStyle = {
            paddingLeft: this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
        };
    
        const mainStyle = {
            margin: "0 6%",
            paddingTop: "5.5rem",
            paddingLeft: this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
        };
        return(
            <div className="fixed-sn black-skin">
            <MDBSideNav
            className="SideNav"
            logo="https://i.imgur.com/ug9huUj.png"
            triggerOpening={this.state.toggleStateA}
            breakWidth={this.state.breakWidth}
            bg="https://i.imgur.com/QF4RJul.jpg"
            mask="strong"
            href="/"
            fixed
            >
                <MDBSideNavNav>
                <MDBSideNavLink to="/" topLevel className={`SideNav-El ${ghostToolClass}`}>
                    <FontAwesomeIcon className="FontAwesomeIcon" icon="ghost" />
                    Ghost Tool
                </MDBSideNavLink>
                <MDBSideNavLink to="/voice" topLevel className="SideNav-El">
                    <FontAwesomeIcon className="FontAwesomeIcon" icon="microphone-alt" />
                    Voice Recognition Lines
                </MDBSideNavLink>
                <MDBSideNavLink to="/items" topLevel className="SideNav-El">
                    <FontAwesomeIcon className="FontAwesomeIcon" icon="briefcase" />
                    Items
                </MDBSideNavLink>
                <MDBSideNavLink to="/maps" topLevel className="SideNav-El">
                    <FontAwesomeIcon className="FontAwesomeIcon" icon="home" />
                    Maps
                </MDBSideNavLink>
                <MDBSideNavLink to="/crucifix" topLevel className="SideNav-El">
                    <FontAwesomeIcon className="FontAwesomeIcon" icon="cross" />
                    Crucifix Verses
                </MDBSideNavLink>
                </MDBSideNavNav>
            </MDBSideNav>
            <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
                <MDBNavbarNav left>
                <MDBNavItem>
                    <div
                    onClick={this.handleToggleClickA}
                    key="sideNavToggleA"
                    style={{
                        lineHeight: "32px",
                        marginRight: "1em",
                        verticalAlign: "middle"
                    }}
                    >
                    <MDBIcon icon="bars" color="white" size="2x" />
                    </div>
                </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
            <main style={mainStyle}>
                <Route exact path="/" component={() => (<HomePage />)} />
                <Route exact path="/voice" component={VoiceRecognition} />
                <Route exact path="/items" component={Items} />
                <Route exact path="/maps" component={Maps} />
                <Route exact path="/crucifix" component={CrucifixVerse} />
                <Route exact path="/ghosttool" component={() => (<Redirect to="/" />)} />
            </main>
            <Footer />
            </div>
        );
    }
};

export default withRouter(SideNav);