import React, { Component } from 'react';
import '../css/MapModal.css';

import { Container, Row, Col } from 'react-bootstrap';
import { MDBModal, MDBModalBody, MDBBtn, MDBBadge, MDBLightbox } from 'mdbreact';

class MapModal extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const map = this.props.map;
        return(
            <div className="MapModal">
            <MDBModal isOpen={this.props.modal} toggle={this.props.toggle} size="lg" centered>
            <MDBModalBody>
            <Container>
            <Row>
                <Col>
                <h3 className="d-inline f-700">{map.name}</h3>
                <MDBBadge color="black" className="d-inline ml-2">{map.size}</MDBBadge>
                </Col>
            </Row>
            <Row className="d-flex justify-content-start mt-2">
                <Col lg={8}>
                <p className="f-400">{map.description}</p>
                </Col>
            </Row>
            <hr />
            <Row className="d-flex justify-content-start">
                <Col lg={10}>
                <p className="d-inline f-600">Recommended Team Size: </p>
                <p className="d-inline"> {map.teamSize}</p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-start">
                <Col lg={10}>
                <p className="d-inline f-600">Recommended Item: </p>
                {
                    map.recommendedItems.map((item, idxx) => {
                        return(<p className="d-inline" key={idxx}>{item}</p>);
                    })
                }
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                <MDBLightbox md="8" images={[{src: map.guideImage}]} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                <div className="provided-by">
                <p className="d-inline">Maps provided by </p>
                <a className="d-inline orange-text" target="_blank" rel="noopener noreferrer" href="https://twitch.tv/kdog57">KDog57</a>
                </div>
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

export default MapModal;