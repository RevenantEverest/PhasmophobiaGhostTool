import React, { Component } from 'react';
import '../css/Notes.css';

import { Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';

class Notes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEveryone: false,
            isAlone: false
        };
    }

    handleGhostPreference(preference) {
        let isEveryone = this.state.isEveryone;
        let isAlone = this.state.isAlone;
        if(preference === "alone") {
            isAlone = true;
            isEveryone = false;
        }
        else if(preference === "everyone") {
            isAlone = false;
            isEveryone = true;
        }

        this.setState({ isEveryone: isEveryone, isAlone: isAlone });
    }

    resetNotes() {
        this.notesForm.reset();
        this.ghostNameForm.reset();
        this.setState({ isEveryone: false, isAlone: false, notes: "" });
    };

    render() {
        return(
            <div className={`Notes ${this.props.className}`}>
            <MDBCard>
            <MDBCardBody>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <form ref={(el => this.notesForm = el)}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon">
                            <i className="fas fa-pencil-alt prefix"></i>
                            </span>
                        </div>
                        <textarea 
                        className="form-control textarea" 
                        id="exampleFormControlTextarea1" 
                        rows="3" />
                    </div>
                    </form>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Row>
                    <Col>
                        <form ref={(el => this.ghostNameForm = el)}>
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon">
                            <i className="fa fa-user prefix" />
                            </span>
                        </div>
                        <input 
                        type="text" 
                        className="form-control input" 
                        placeholder="Ghost Name" 
                        aria-label="Ghost Name" 
                        aria-describedby="basic-addon"
                        ref={this.ghostNameInput} />
                        </div>
                        </form>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={4} sm={12}>
                        <MDBBtn 
                        className="Button ml-0 mt-3 w-100" 
                        color={`${this.state.isEveryone ? "green" : "grey"}`} 
                        disabled={this.stat} 
                        size="md"
                        onClick={() => this.handleGhostPreference("everyone")}>
                            Everybody
                        </MDBBtn>
                    </Col>
                    <Col lg={4} sm={12}>
                        <MDBBtn 
                        className="Button ml-0 mt-3 w-100" 
                        color={`${this.state.isAlone ? "green" : "grey"}`} 
                        size="md"
                        onClick={() => this.handleGhostPreference("alone")}>
                            Alone
                        </MDBBtn>
                    </Col>
                    <Col lg={3} sm={12}>
                        <MDBBtn 
                        className="Button ml-0 mt-3" 
                        color="red"
                        size="sm"
                        onClick={() => this.resetNotes()}>
                            Reset
                        </MDBBtn>
                    </Col>
                    </Row>
                </Col>
            </Row>
            </MDBCardBody>
            </MDBCard>
            </div>
        );
    }
};

export default Notes;