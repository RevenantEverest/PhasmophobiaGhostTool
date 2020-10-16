import React, { Component } from 'react';
import '../css/CrucifixVerse.css';

import { Container, Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';

import BibleVerses from '../../res/BibleVerses';

import apiServices from '../../services/apiServices';

class CrucifixVerse extends Component {

    constructor() {
        super();
        this.state = {};
    }
    
    generateBibleVerse() {
        let search = BibleVerses[Math.floor(Math.random() * BibleVerses.length)];
        search = search.replace(" ", "+");
        apiServices.getBibleVerse(search)
        .then(verse => this.setState({ title: verse.data.reference, verse: verse.data.text}, () => console.log(verse.data)))
        .catch(err => console.error(err));
    }

    render() {
        return(
            <div id="CrucifixVerse" className="app-page">
                <Container>
                <Row>
                    <Col className="text-center">
                    <h4 className="text-uppercase f-700">Crucifix Verse Generator</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-3">
                    <MDBCard className="w-100">
                    <MDBCardBody>
                        <Row>
                            <Col>
                            <MDBBtn color="grey" className="ml-0" size="md" onClick={() => this.generateBibleVerse()}>Generate</MDBBtn>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col>
                            <MDBCard style={{ height: "200px" }}>
                            <MDBCardBody style={{ background: "#3c3c3c" }}>
                            <Row>
                                <Col>
                                <h5>{this.state.title}</h5>
                                <p>{this.state.verse}</p>
                                </Col>
                            </Row>
                            </MDBCardBody>
                            </MDBCard>
                            </Col>
                        </Row>
                    </MDBCardBody>
                    </MDBCard>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
};

export default CrucifixVerse;