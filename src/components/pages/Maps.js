import React, { Component } from 'react';
import '../css/Maps.css';

import { Container, Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody } from 'mdbreact';

import MapModal from '../sections/MapModal';

import MapList from '../../res/Maps';

class Items extends Component {

    constructor() {
        super();
        this.state = {};
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({[modalNumber]: !this.state[modalNumber]});
    }

    findModal = (index) => this.state[("modal" + index)];

    renderMaps() {
        let MapCards = MapList.map((map, idx) => {
            return(
                <Col lg={3} md={3} sm={12} className="mb-3" key={idx}>
                <MDBCard style={{ height: "100px" }} onClick={this.toggle(idx)}>
                <MDBCardBody>
                <Row>
                    <Col className="text-center">
                    <h5 className="d-inline f-600">{map.name} </h5>
                    <h6 className="f-600">{map.size}</h6>
                    </Col>
                </Row>
                </MDBCardBody>
                </MDBCard>

                <MapModal 
                modal={this.findModal(idx)} 
                toggle={this.toggle(idx)} 
                map={map} 
                />
                </Col>
            );
        });

        return(
            <Row className="mt-4">
            {MapCards}
            </Row>
        );
    }

    render() {
        return(
            <div id="Maps" className="app-page">
                <Container fluid>
                <Row>
                    <Col className="text-center">
                    <h4 className="text-uppercase f-700">Phasmophobia Map List</h4>
                    </Col>
                </Row>
                <Row>
                </Row>
                {this.renderMaps()}
                </Container>
            </div>
        );
    }
};

export default Items;