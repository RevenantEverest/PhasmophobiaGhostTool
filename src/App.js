import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faBan, 
    faAngleDown,
    faAngleRight,
    faBriefcase, 
    faCross, 
    faGhost, 
    faHome, 
    faMicrophoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
    MDBIcon, 
    MDBSideNav, 
    MDBSideNavNav, 
    MDBSideNavLink,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem
} from 'mdbreact';

import HomePage from './components/pages/HomePage';
import VoiceRecognition from './components/pages/VoiceRecognition';
import Items from './components/pages/Items';
import Maps from './components/pages/Maps';
import CrucifixVerse from './components/pages/CruifixVerse';
import Footer from './components/sections/Footer';

library.add(fab);
library.add(
    faBan, 
    faGhost, 
    faHome, 
    faBriefcase, 
    faMicrophoneAlt, 
    faAngleRight, 
    faAngleDown, 
    faCross
);

class App extends Component {

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
        const navStyle = {
            paddingLeft: this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
        };
    
        const mainStyle = {
            margin: "0 6%",
            paddingTop: "5.5rem",
            paddingLeft: this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
        };
        return(
            <div id="App">
                <Router>
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
                    <MDBSideNavLink to="/ghosttool" topLevel className="SideNav-El">
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
                    <Route exact path="/ghosttool" component={() => (<HomePage />)} />
                    <Route exact path="/voice" component={VoiceRecognition} />
                    <Route exact path="/items" component={Items} />
                    <Route exact path="/maps" component={Maps} />
                    <Route exact path="/crucifix" component={CrucifixVerse} />
                    <Route exact path="/" component={() => (<Redirect to="/ghosttool" />)} />
                </main>
                <Footer />
                </div>
                </Router>
            </div>
        );
    }
};

export default App;
