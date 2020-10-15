import React, { Component } from 'react';
import '../css/Ghosts.css';

import { Container, Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody } from 'mdbreact';

import EvidenceChecklist from './EvidenceChecklist';
import GhostModal from './GhostModal';

import GhostTypes from '../../res/GhostTypes';
import Evidence from '../../res/Evidence';

class Ghosts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collectedEvidence: []
        };
        this.addEvidence = this.addEvidence.bind(this);
        this.removeEvidence = this.removeEvidence.bind(this);
        this.handleEvidenceReset = this.handleEvidenceReset.bind(this);
    }

    addEvidence(el) {
        let currentEvidence = this.state.collectedEvidence;
        currentEvidence.push(el);
        this.setState({ collectedEvidence: currentEvidence });
    }

    removeEvidence(el) {
        let currentEvidence = this.state.collectedEvidence;
        currentEvidence.splice(currentEvidence.indexOf(el), 1);
        this.setState({ collectedEvidence: currentEvidence });
    }

    handleEvidenceReset() {
        this.setState({ collectedEvidence: [] });
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({[modalNumber]: !this.state[modalNumber]});
    }

    findModal = (index) => this.state[("modal" + index)];

    renderGhosts() {
        let GhostCards = GhostTypes.map((ghost, idx) => {
            let impossible = false;
            this.state.collectedEvidence.forEach(el => {
                if(!ghost.evidence.includes(el)) impossible = true;
            });
            return(
                <Col lg={3} className="mb-4" key={idx}>
                <MDBCard className="w-100" onClick={this.toggle(idx)}>
                <MDBCardBody className={`text-center ${impossible ? "disabled-card" : ""}`}>
                <Row>
                    <Col>
                    <h5 className="f-700">{ghost.name}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {
                        ghost.evidence.map((evidenceIndex, idxx) => {
                            let textColor = "grey-text";
                            if(this.state.collectedEvidence.includes(evidenceIndex))
                                textColor = "green-text";
                            if(impossible)
                                textColor = "inherit";
                            return(
                                <div key={idxx}>
                                <p 
                                className={
                                    `mb-0 ${textColor}`
                                }>
                                    {Evidence[evidenceIndex]}
                                </p>
                                </div>
                            );
                        })
                    }
                    </Col>
                </Row>
                </MDBCardBody>
                </MDBCard>

                <GhostModal 
                modal={this.findModal(idx)} 
                toggle={this.toggle(idx)} 
                ghost={ghost} 
                collectedEvidence={this.state.collectedEvidence}
                />
                </Col>
            );
        });

        return(
            <Row>
            {GhostCards}
            </Row>
        );
    }

    render() {
        return(
            <div className={`Ghosts ${this.props.className}`}>
            <Container fluid className="pl-0 pr-0">
            <Row className="mb-5">
                <Col>
                    <EvidenceChecklist 
                    collectedEvidence={this.state.collectedEvidence} 
                    addEvidence={this.addEvidence}
                    removeEvidence={this.removeEvidence}
                    handleEvidenceReset={this.handleEvidenceReset} />
                </Col>
            </Row>
            {this.renderGhosts()}
            </Container>
            </div>
        );
    }
};

export default Ghosts;