import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
import SideNav from './components/navigation/SideNav';


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

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div id="App">
            <Router>
                <SideNav />
            </Router>
            </div>
        );
    }
};

export default App;
