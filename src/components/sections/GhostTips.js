import React, { Component } from 'react';
import '../css/GhostTips.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCollapse, MDBBadge } from 'mdbreact';

class GhostTips extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseID: "collapse1"
        };
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    renderTips() {
        let Tips = this.props.ghost.tips.map((el, idx) => {
            return <li key={idx}>{el}</li>
        });

        return(
            <div>
                <ul className="mb-4">{Tips}</ul>
                <div className="provided-by">
                <p className="d-inline">Tips provided by </p>
                <a className="d-inline orange-text" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCwC6yByzb5-YQNyCT9KKS0Q">Psycho </a>
                </div>
            </div>
        );
    }

    render() {
        const { collapseID } = this.state;
        return(
            <div className="GhostTips">
            <MDBCard>
            <MDBCardHeader className="card-header pointer" onClick={this.toggleCollapse("Tips")}>
                Ghost Tips and Mechanics
                <MDBBadge color="red" className="ml-2">Spoilers</MDBBadge>
                <FontAwesomeIcon className="ml-2" icon={collapseID === "Tips" ? "angle-down" : "angle-right"} />
            </MDBCardHeader>
            <MDBCollapse id={"Tips"} isOpen={this.state.collapseID}>
                <MDBCardBody className="card-body">
                    {this.renderTips()}
                </MDBCardBody>
            </MDBCollapse>
            </MDBCard>
            </div>
        );
    }
};

export default GhostTips;