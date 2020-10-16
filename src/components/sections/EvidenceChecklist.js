import React, { Component } from 'react';
import '../css/EvidenceChecklist.css'

import { Container, Row, Col } from 'react-bootstrap';
import { MDBBtn } from 'mdbreact';

import Evidence from '../../res/Evidence';

class EvidenceChecklist extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleEvidence(el) {
        if(this.props.collectedEvidence.includes(el)) {
            this.props.removeEvidence(el);
            this.props.eliminateEvidence(el);
        }
        else if(this.props.eliminatedEvidence.includes(el))
            return this.props.removeEliminatedEvidence(el)
        else return this.props.addEvidence(el);
    }

    renderChecklist() {
        let Checklist = Evidence.map((el, idx) => {
            return(
                <Col lg={2} md={4} sm={12} key={idx}>
                <MDBBtn 
                color={`${this.props.collectedEvidence.includes(idx) ? "green" : "grey darken-3"}`} 
                className={`f-600 w-100 ${this.props.eliminatedEvidence.includes(idx) ? "strike-through-red" : ""}`} 
                size="md"
                disabled={false}
                onClick={() => this.handleEvidence(idx)}>{el}</MDBBtn>
                </Col>
            );
        });

        return(
            <Row className="d-flex justify-content-center">
            {Checklist}
            </Row>
        );
    }

    render() {
        return(
            <div className={`EvidenceChecklist ${this.props.className}`}>
            <Container fluid className="pr-0 pl-0">
            <Row>
            <Col>
                <MDBBtn color="red" size="sm" onClick={this.props.handleEvidenceReset}>Reset</MDBBtn>
            </Col>
            </Row>
            {this.renderChecklist()}
            </Container>
            </div>
        );
    }
};

export default EvidenceChecklist;