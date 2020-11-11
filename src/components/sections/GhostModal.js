import React, { Component } from 'react';
import '../css/GhostsModal.css';

import { Container, Row, Col } from 'react-bootstrap';
import { MDBModal, MDBModalBody, MDBBtn } from 'mdbreact';

import Evidence from '../../res/Evidence';

class GhostModal extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const ghost = this.props.ghost;
        return(
            <div className="GhostModal">
            <MDBModal isOpen={this.props.modal} toggle={this.props.toggle} size="lg" centered>
            <MDBModalBody>
            <Container>
            <Row className="mt-2 mb-3">
                <Col>
                <Row>
                {
                    ghost.evidence.map((el, idx) => {
                        return(
                            <Col lg={4} sm={12} key={idx}>
                            <MDBBtn 
                            color={`${this.props.collectedEvidence.includes(el) ? "green" : "grey"}`} 
                            className={`ml-0 w-100 ${this.props.eliminatedEvidence.includes(el) ? "strike-through-red" : ""}`} 
                            size="md">
                                {Evidence[el]}
                            </MDBBtn>
                            </Col>
                        );
                    })
                }
                </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                <h3 className="f-700">{ghost.name}</h3>
                </Col>
            </Row>
            <Row className="d-flex justify-content-start">
                <Col lg={8}>
                <p className="f-400">{ghost.description}</p>
                </Col>
            </Row>
            <hr />
            <Row className="d-flex justify-content-start">
                <Col lg={10}>
                <p className="d-inline f-600">Strengths: </p>
                <p className="d-inline">{ghost.strengths}</p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-start">
                <Col lg={10}>
                <p className="d-inline f-600">Weaknesses: </p>
                <p className="d-inline">{ghost.weaknesses}</p>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                <MDBBtn color="grey" className="ml-0" size="md" onClick={this.props.toggle}>Close</MDBBtn>
                </Col>
            </Row>
            </Container>
            </MDBModalBody>
            </MDBModal>
            </div>
        );
    }
};

export default GhostModal;