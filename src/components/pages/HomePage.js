import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Notes from '../sections/Notes';
import Ghosts from '../sections/Ghosts';

class HomePage extends Component {

    render() {
        return(
            <div id="HomePage" className="app-page">
            <Container fluid>
                <Row>
                    <Col className="text-center">
                        <h4 className="text-uppercase f-700">Phasmophobia Ghost Tool</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Notes className="mt-3" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Ghosts className="mt-3" />
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
};

export default HomePage;