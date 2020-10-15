import React, { Component } from 'react';
import '../css/Items.css';

import { Container, Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody } from 'mdbreact';

import ItemModal from '../sections/ItemModal';

import ItemList from '../../res/Items';

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

    renderItems() {
        let ItemCards = ItemList.map((item, idx) => {
            return(
                <Col lg={3} md={3} sm={12} className="mb-3" key={idx}>
                <MDBCard style={{ height: "100px" }} onClick={this.toggle(idx)}>
                <MDBCardBody>
                <Row>
                    <Col className="text-center">
                    <h5 className="d-inline f-600">{item.name} </h5>
                    <h5 className="f-600">${item.price}</h5>
                    </Col>
                </Row>
                </MDBCardBody>
                </MDBCard>

                <ItemModal 
                modal={this.findModal(idx)} 
                toggle={this.toggle(idx)} 
                item={item} 
                />
                </Col>
            );
        });

        return(
            <Row className="mt-4">
            {ItemCards}
            </Row>
        );
    }

    render() {
        return(
            <div id="Items" className="app-page">
                <Container fluid>
                <Row>
                    <Col className="text-center">
                    <h4 className="text-uppercase f-700">Phasmophobia Item List</h4>
                    </Col>
                </Row>
                <Row>
                </Row>
                {this.renderItems()}
                </Container>
            </div>
        );
    }
};

export default Items;