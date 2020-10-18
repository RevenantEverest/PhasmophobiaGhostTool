import React, { Component } from 'react';
import '../css/Ghosts.css';

import { Container, Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody } from 'mdbreact';
import { connect } from 'react-redux';
import { 
    addEvidence, 
    removeEvidence, 
    eliminateEvidence, 
    removeEliminatedEvidence,
    resetEvidence
} from '../../redux/actions';

import EvidenceChecklist from './EvidenceChecklist';
import GhostModal from './GhostModal';

import GhostTypes from '../../res/GhostTypes';
import Evidence from '../../res/Evidence';

class Ghosts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collectedEvidence: this.props.collectedEvidence,
            eliminatedEvidence: this.props.eliminatedEvidence
        };
        this.handleAddEvidence = this.handleAddEvidence.bind(this);
        this.handleRemoveEvidence = this.handleRemoveEvidence.bind(this);
        this.handleEliminateEvidence = this.handleEliminateEvidence.bind(this);
        this.handleRemoveEliminatedEvidence = this.handleRemoveEliminatedEvidence.bind(this);
        this.handleEvidenceReset = this.handleEvidenceReset.bind(this);
    }

    handleAddEvidence(el) {
        let currentEvidence = this.state.collectedEvidence;
        currentEvidence.push(el);
        this.props.addEvidence(el);
        this.setState({ collectedEvidence: currentEvidence });
    }

    handleRemoveEvidence(el) {
        let currentEvidence = this.state.collectedEvidence;
        currentEvidence.splice(currentEvidence.indexOf(el), 1);
        this.props.removeEvidence(el);
        this.setState({ collectedEvidence: currentEvidence });
    }

    handleEliminateEvidence(el) {
        let currentEliminatedEvidence = this.state.eliminatedEvidence;
        currentEliminatedEvidence.push(el);
        this.props.eliminateEvidence(el);
        this.setState({ eliminateEvidence: currentEliminatedEvidence });
    }

    handleRemoveEliminatedEvidence(el) {
        let currentEliminatedEvidence = this.state.eliminatedEvidence;
        currentEliminatedEvidence.splice(currentEliminatedEvidence.indexOf(el), 1);
        this.props.removeEliminatedEvidence(el);
        this.setState({ eliminateEvidence: currentEliminatedEvidence });
    }

    handleEvidenceReset() {
        this.setState({ 
            collectedEvidence: [], 
            eliminatedEvidence: [] 
        }, () => this.props.resetEvidence());
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({[modalNumber]: !this.state[modalNumber]});
    }

    findModal = (index) => this.state[("modal" + index)];

    renderGhosts() {
        let GhostCards = GhostTypes.map((ghost, idx) => {
            let impossible = false;
            if(this.state.collectedEvidence.filter(el => !ghost.evidence.includes(el)).length > 0)
                impossible = true;
            if(this.state.eliminatedEvidence.filter(el => ghost.evidence.includes(el)).length > 0)
                impossible = true;
            return(
                <Col lg={3} className="mb-4" key={idx}>
                <MDBCard className="w-100" onClick={this.toggle(idx)}>
                <MDBCardBody className={`text-center ${impossible ? "disabled-card" : ""}`}>
                <Row>
                    <Col>
                    <h5 className="f-700">{ghost.name}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {
                        ghost.evidence.map((evidenceIndex, idxx) => {
                            let textColor = "grey-text";
                            if(this.state.collectedEvidence.includes(evidenceIndex) && !impossible)
                                textColor = "green-text";
                            if(this.state.eliminatedEvidence.includes(evidenceIndex))
                                textColor="red-text"
                            if(impossible)
                                textColor = "inherit";
                            return(
                                <div key={idxx}>
                                <p 
                                className={`
                                    mb-0 
                                    ${textColor} 
                                    ${this.state.eliminatedEvidence.includes(evidenceIndex) ? "line-through" : ""}
                                `}>
                                    {Evidence[evidenceIndex]}
                                </p>
                                </div>
                            );
                        })
                    }
                    </Col>
                </Row>
                </MDBCardBody>
                </MDBCard>

                <GhostModal 
                modal={this.findModal(idx)} 
                toggle={this.toggle(idx)} 
                ghost={ghost} 
                collectedEvidence={this.state.collectedEvidence}
                eliminatedEvidence={this.state.eliminatedEvidence}
                />
                </Col>
            );
        });

        return(
            <Row>
            {GhostCards}
            </Row>
        );
    }

    render() {
        return(
            <div className={`Ghosts ${this.props.className}`}>
            <Container fluid className="pl-0 pr-0">
            <Row className="mb-5">
                <Col>
                    <EvidenceChecklist 
                    collectedEvidence={this.state.collectedEvidence} 
                    eliminatedEvidence={this.state.eliminatedEvidence}
                    handleAddEvidence={this.handleAddEvidence}
                    handleRemoveEvidence={this.handleRemoveEvidence}
                    handleEliminateEvidence={this.handleEliminateEvidence}
                    handleRemoveEliminatedEvidence={this.handleRemoveEliminatedEvidence}
                    handleEvidenceReset={this.handleEvidenceReset} 
                    />
                </Col>
            </Row>
            {this.renderGhosts()}
            </Container>
            </div>
        );
    }
};

const mapStateToProps = state => {
    const collectedEvidence = state.evidence.collectedEvidence ? state.evidence.collectedEvidence : [];
    const eliminatedEvidence = state.evidence.eliminatedEvidence ? state.evidence.eliminatedEvidence : [];
    return { collectedEvidence, eliminatedEvidence }
}

export default connect(mapStateToProps, { 
    addEvidence,
    removeEvidence,
    eliminateEvidence,
    removeEliminatedEvidence,
    resetEvidence
 })(Ghosts);