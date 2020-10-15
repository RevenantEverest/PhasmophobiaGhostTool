import React, { Component } from 'react';
import '../css/VoiceRecognition.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { 
    MDBCard, 
    MDBCardBody, 
    MDBCardHeader,
    MDBCollapse
} from 'mdbreact';

import VoiceLines from '../sections/VoiceLines';

import VoiceRecognitionLines from '../../res/VoiceRecognitionLines';

class VoiceRecognition extends Component {

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

    render() {
        const { collapseID } = this.state;
        return(
            <div id="VoiceRecognition" className="app-page">
                <Container fluid>
                <Row>
                    <Col className="text-center">
                    <h4 className="text-uppercase f-700">Phasmophobia Voice Recognition List</h4>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                    <MDBCard>
                    <MDBCardHeader className="card-header pointer" onClick={this.toggleCollapse("General")}>
                        General Questions
                        <FontAwesomeIcon className="ml-2" icon={collapseID === "General" ? "angle-down" : "angle-right"}/>
                    </MDBCardHeader>
                    <MDBCollapse id={"General"} isOpen={this.state.collapseID}>
                        <MDBCardBody>
                            <VoiceLines voiceLines={VoiceRecognitionLines.filter(el => el.category === "general")} />
                        </MDBCardBody>
                    </MDBCollapse>
                    </MDBCard>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                    <MDBCard>
                    <MDBCardHeader className="card-header pointer" onClick={this.toggleCollapse("SpiritBox")}>
                        Spirit Box Questions
                        <FontAwesomeIcon className="ml-2" icon={collapseID === "SpiritBox" ? "angle-down" : "angle-right"} />
                    </MDBCardHeader>
                    <MDBCollapse id={"SpiritBox"} isOpen={this.state.collapseID}>
                        <MDBCardBody>
                            <VoiceLines voiceLines={VoiceRecognitionLines.filter(el => el.category === "spiritBox")} />
                        </MDBCardBody>
                    </MDBCollapse>
                    </MDBCard>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                    <MDBCard>
                    <MDBCardHeader className="card-header pointer" onClick={this.toggleCollapse("Ouija")}>
                        Ouija Board Questions
                        <FontAwesomeIcon className="ml-2" icon={collapseID === "Ouija" ? "angle-down" : "angle-right"} />
                    </MDBCardHeader>
                    <MDBCollapse id={"Ouija"} isOpen={this.state.collapseID}>
                        <MDBCardBody>
                            <VoiceLines voiceLines={VoiceRecognitionLines.filter(el => el.category === "ouijaBoard")} />
                        </MDBCardBody>
                    </MDBCollapse>
                    </MDBCard>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
};

export default VoiceRecognition;