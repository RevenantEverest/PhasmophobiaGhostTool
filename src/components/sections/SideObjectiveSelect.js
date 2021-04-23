import React, { Component } from 'react';
import '../css/SideObjectives.css';

import { Row, Col } from 'react-bootstrap';
import { MDBInput } from 'mdbreact';
import { connect } from 'react-redux';
import { updateSideObjectiveSelect, updateSideObjectiveCheckbox } from '../../redux/actions';

import SideObjectives from '../../res/SideObjectives';

class SideObjectiveSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: SideObjectives.map(objective => {
                return { text: objective.name, value: objective.name }
            }),
            currentObjective: this.props.sideObjective.objective,
            isChecked: this.props.sideObjective.checked
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            currentObjective: props.sideObjective.objective,
            isChecked: props.sideObjective.checked
        });
    }

    handleSelectChange(e) {
        let selectOption = e.target.value;
        this.props.updateSideObjectiveSelect({ id: this.props.id, objective: selectOption });
        this.setState({ currentObjective: selectOption });
    }

    handleCheckbox(value) {
        this.props.updateSideObjectiveCheckbox({ id: this.props.id, checked: value });
        this.setState({ isChecked: value });
    }

    renderSideObjectives() {
        let SideObjectivesOption = SideObjectives.map((objective, idx) => {
            return(
                <option  value={objective.name} key={idx}>
                    {objective.isNew ? "(New) " : ''}
                    {objective.name}
                </option>
            );
        });

        return(
            <select 
            className="browser-default custom-select" 
            onChange={this.handleSelectChange} 
            value={this.state.currentObjective ? this.state.currentObjective : ""}
            >
                <option>Choose a side objective</option>
                {SideObjectivesOption}
            </select>
        );
    }

    render() {
        return(
            <div className="SideObjectiveSelect mb-2">
            <Row >
            <Col lg={1} md={1} sm={12}>
                <div className="d-flex justify-content-center mt-2" >
                <MDBInput 
                filled 
                type="checkbox" 
                id={`checkbox${this.props.id}`} 
                getValue={this.handleCheckbox} 
                checked={this.state.isChecked}
                containerClass="align-middle" />
                </div>
            </Col>
            <Col lg={11} md={11} sm={12}>
                {this.renderSideObjectives()}
            </Col>
            </Row>
            </div>
        );
    }
};

export default connect(null, {
    updateSideObjectiveSelect,
    updateSideObjectiveCheckbox
})(SideObjectiveSelect);