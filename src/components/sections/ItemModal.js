import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { MDBModal, MDBModalBody, MDBBtn } from 'mdbreact';

class ItemModal extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const item = this.props.item;
        return(
            <div className="ItemModal">
            <MDBModal isOpen={this.props.modal} toggle={this.props.toggle} size="lg" centered>
            <MDBModalBody>
            <Container>
            <Row>
                <Col>
                <h3 className="d-inline f-700">{item.name}</h3>
                <h3 className="d-inline f-700"> ${item.price}</h3>
                </Col>
            </Row>
            <Row className="d-flex justify-content-start mt-2">
                <Col lg={8}>
                <p className="f-400">{item.description}</p>
                </Col>
            </Row>
            <hr />
            <Row className="d-flex justify-content-start">
                <Col lg={10}>
                <p className="d-inline f-600">Max Amount Per Contract: </p>
                <p className="d-inline">{item.maxAmount}</p>
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

export default ItemModal;