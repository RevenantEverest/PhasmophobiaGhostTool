import React, { Component } from 'react';
import '../css/EvidenceChecklist.css'

import { Container, Row, Col } from 'react-bootstrap';
import { MDBBtn } from 'mdbreact';

import GhostTypes from '../../res/GhostTypes';
import Evidence from '../../res/Evidence';

class EvidenceChecklist extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleEvidence(el) {
        if(this.props.collectedEvidence.includes(el)) {
            this.props.handleRemoveEvidence(el);
            this.props.handleEliminateEvidence(el);
        }
        else if(this.props.eliminatedEvidence.includes(el))
            return this.props.handleRemoveEliminatedEvidence(el)
        else return this.props.handleAddEvidence(el);
    }

    /* On first page render, CollectedEvidence gets added twice but doesn't happen on reset */
    /* So this function is needed to combat that */
    removeDuplicatesInArray(arr) {
        let uniqueArr = [];
        for(let i = 0; i < arr.length; i++) {
            if(uniqueArr.indexOf(arr[i]) === -1)
                uniqueArr.push(arr[i])
        }
        return uniqueArr;
    }

    renderChecklist() {
        let collectedEvidence = this.removeDuplicatesInArray(this.props.collectedEvidence);
        let eliminatedEvidence = this.props.eliminatedEvidence;
        let ghostTypeEvidence = GhostTypes.map(ghost => ghost.evidence);

        let temp = [];
        for(let i = 0; i < ghostTypeEvidence.length; i++) {
            if(collectedEvidence.length <= 0) continue;
            if(collectedEvidence.every(el => ghostTypeEvidence[i].includes(el))) {
                temp.push(ghostTypeEvidence[i].filter(el => !collectedEvidence.includes(el)));
            }
        }

        temp = [].concat.apply([], temp);

        let Checklist = Evidence.map((el, idx) => {
            let disabled = false;
            if(temp.length > 0 && !temp.includes(idx) && !collectedEvidence.includes(idx)) 
                disabled = true;
            if(collectedEvidence.length >= 3 && !collectedEvidence.includes(idx))
                disabled = true;
            return(
                <Col lg={2} md={4} sm={12} key={idx}>
                <MDBBtn 
                color={`${collectedEvidence.includes(idx) ? "green" : "grey darken-3"}`} 
                className={`f-600 w-100 ${eliminatedEvidence.includes(idx) ? "strike-through-red" : ""}`} 
                size="md"
                disabled={disabled}
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