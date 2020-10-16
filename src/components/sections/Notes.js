import React, { Component } from 'react';
import '../css/Notes.css';

import { Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import {
    addGhostName,
    removeGhostName,
    updateIsEveryone,
    updateIsAlone,
    resetNotes,
    resetSideObjectives
} from '../../redux/actions';

import SideObjectiveSelect from './SideObjectiveSelect';

class Notes extends Component {

    ghostNameForm = React.createRef();
    form1 = React.createRef();
    form2 = React.createRef();
    form3 = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            isEveryone: this.props.isEveryone,
            isAlone: this.props.isAlone,
            ghostName: this.props.ghostName,
            sideObjective1: this.props.sideObjectiveList.filter(el => el.id === 1)[0],
            sideObjective2: this.props.sideObjectiveList.filter(el => el.id === 2)[0],
            sideObjective3: this.props.sideObjectiveList.filter(el => el.id === 3)[0],
        };
        this.ghostNameFrorm = React.createRef();
        this.handeChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        clearTimeout(this._timer);
        this._timer = setTimeout(() => {
            this.props.addGhostName(this.state.ghostName)
        }, 1000);
        this.setState({ [e.target.name]: e.target.value })
    }

    handleGhostPreference(preference) {
        let isEveryone = this.state.isEveryone;
        let isAlone = this.state.isAlone;
        if(preference === "alone") {
            isAlone = true;
            isEveryone = false;
            this.props.updateIsAlone();
        }
        else if(preference === "everyone") {
            isAlone = false;
            isEveryone = true;
            this.props.updateIsEveryone();
        }

        this.setState({ isEveryone: isEveryone, isAlone: isAlone });
    }

    resetNotes() {
        this.ghostNameForm.current.reset();
        this.form1.current.reset();
        this.form2.current.reset();
        this.form3.current.reset();
        this.setState({ 
            isEveryone: false, 
            isAlone: false, 
            ghostName: "",
            sideObjective1: { id: 1, objective: null, checked: false},
            sideObjective2: { id: 2, objective: null, checked: false},
            sideObjective3: { id: 3, objective: null, checked: false},
        }, () => this.resetStore());
    };

    resetStore() {
        this.props.resetNotes();
        this.props.resetSideObjectives();
    }

    render() {
        return(
            <div className={`Notes ${this.props.className}`}>
            <MDBCard>
            <MDBCardBody>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <form ref={this.form1}>
                    <SideObjectiveSelect id={1} sideObjective={this.state.sideObjective1} />
                    </form>
                    <form ref={this.form2}>
                    <SideObjectiveSelect id={2} sideObjective={this.state.sideObjective2} />
                    </form>
                    <form ref={this.form3}>
                    <SideObjectiveSelect id={3} sideObjective={this.state.sideObjective3} />
                    </form>
                </Col>
                <Col lg={5} md={5} sm={12}>
                    <Row>
                    <Col>
                        <form ref={this.ghostNameForm}>
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon">
                            <i className="fa fa-user prefix" />
                            </span>
                        </div>
                        <input 
                        type="text" 
                        className="form-control input" 
                        name="ghostName"
                        placeholder="Ghost Name" 
                        aria-label="Ghost Name" 
                        aria-describedby="basic-addon"
                        value={this.state.ghostName}
                        onChange={this.handleChange}
                        />
                        </div>
                        </form>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={4} md={6} sm={12}>
                        <MDBBtn 
                        className="Button ml-0 mt-3 w-100" 
                        color={`${this.state.isEveryone ? "green" : "grey"}`} 
                        size="md"
                        onClick={() => this.handleGhostPreference("everyone")}>
                            Everybody
                        </MDBBtn>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <MDBBtn 
                        className="Button ml-0 mt-3 w-100" 
                        color={`${this.state.isAlone ? "green" : "grey"}`} 
                        size="md"
                        name="alone"
                        onClick={() => this.handleGhostPreference("alone")}>
                            Alone
                        </MDBBtn>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <MDBBtn 
                        className="Button ml-0" 
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

const mapStateToProps = state => {
    const isEveryone = state.notes.isEveryone ? state.notes.isEveryone : false;
    const isAlone = state.notes.isAlone ? state.notes.isAlone : false;
    const ghostName = state.notes.ghostName ? state.notes.ghostName : "";

    const sideObjectiveList = state.sideObjectives.list ? state.sideObjectives.list : [];
    return { isEveryone, isAlone, ghostName, sideObjectiveList  };
};

export default connect(mapStateToProps, {
    addGhostName,
    removeGhostName,
    updateIsEveryone,
    updateIsAlone,
    resetNotes,
    resetSideObjectives
})(Notes);