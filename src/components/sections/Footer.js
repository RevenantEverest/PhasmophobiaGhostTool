import React, { Component } from 'react';
import '../css/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBFooter } from 'mdbreact';

class Footer extends Component {

    render() {
        return(
            <div className="Footer">
                <MDBFooter style={{ background: "#060606" }} className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left" style={{ marginBottom: "2%" }}>
                    <Row>
                    <Col md="6" className="Footer-Col__Sec1">
                        <a target="_blank" rel="noopener noreferrer" href="https://firesidebot.com">
                            <img src="https://i.imgur.com/KR9xQdZ.png" alt="" className="Footer-Logo" />
                            <h5 className="title Footer-Logo-Text">FiresideBOT</h5>
                        </a>
                        <Row style={{ marginTop: "2%" }}>
                        <Col className="Footer-Col" style={{ marginBottom: "2%" }}>
                            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/TqKHVUa">
                                <FontAwesomeIcon className="Footer-Icon" icon={['fab', 'discord']} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/RevenantEeverest/">
                            <FontAwesomeIcon className="Footer-Icon" icon={['fab', 'facebook']} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/RevenantEverest">
                            <FontAwesomeIcon className="Footer-Icon" icon={['fab', 'twitter']} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/RevenantEverest/PhasmophobiaGhostTool">
                            <FontAwesomeIcon className="Footer-Icon" icon={['fab', 'github']} />
                            </a>
                        </Col>
                        </Row>
                        <Row>
                            <Col className="Footer-Col">
                                <p>Created by</p>
                                <a className="Footer-Fireside" target="_blank" rel="noopener noreferrer" href="https://stefischer.com"> 
                                    RevevantEverest #2136
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="Footer-Col">
                                <p>Powered by</p>
                                <a className="Footer-Fireside" target="_blank" rel="noopener noreferrer" href="https://firesidebot.com"> FiresideBOT</a>
                                <p>. Give us a vote over at </p>
                                <a id="Footer-DBL-Link" target="_blank" rel="noopener noreferrer" href="https://discordbots.org/bot/441338104545017878"> DBL</a> 
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={2}>
                            <a className="Footer-DBL" href="https://discordbots.org/bot/441338104545017878" >
                            <img src="https://discordbots.org/api/widget/status/441338104545017878.svg?noavatar=true" alt="FiresideBOT" />
                            </a>
                            </Col>
                            <Col lg={2}>
                            <a className="Footer-DBL" href="https://discordbots.org/bot/441338104545017878" >
                            <img src="https://discordbots.org/api/widget/servers/441338104545017878.svg?noavatar=true" alt="FiresideBOT" />
                            </a>
                            </Col>
                            <Col lg={2}>
                            <a className="Footer-DBL" href="https://discordbots.org/bot/441338104545017878" >
                            <img src="https://discordbots.org/api/widget/upvotes/441338104545017878.svg?noavatar=true" alt="FiresideBOT" />
                            </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="2" style={{ marginBottom: "2%" }}>
                        <h5 className="title Footer-UL-Title__Contact">Contact</h5>
                        <ul className="Footer-UL" style={{ paddingLeft: "0" }}>
                        <li className="list-unstyled Footer-LI">
                            <p>firesidebot@gmail.com</p>
                        </li>
                        </ul>
                    </Col>
                    <Col md="2" style={{ marginBottom: "2%" }}>
                        <h5 className="title Footer-UL-Title__UsefulLinks">Useful Links</h5>
                        <ul className="Footer-UL" style={{ paddingLeft: "0" }}>
                        <li className="list-unstyled Footer-LI">
                            <a className="Footer-Link" target="_blank" rel="noopener noreferrer" href="https://discord.gg/SWeUKBt">
                                Phasmophobia Discord Server
                            </a>
                        </li>
                        <li className="list-unstyled Footer-LI">
                            <a className="Footer-Link" target="_blank" rel="noopener noreferrer" href="https://trello.com/b/9QrnqQ1j/phasmophobia">
                                Phasmophobia Developer Trello
                            </a>
                        </li>
                        </ul>
                    </Col>
                    <Col md="2" style={{ marginBottom: "2%" }}>
                        <h5 className="title Footer-UL-Title__UsefulLinks">Resources</h5>
                        <ul className="Footer-UL" style={{ paddingLeft: "0" }}>
                        <li className="list-unstyled Footer-LI">
                            <a className="Footer-Link" target="_blank" rel="noopener noreferrer" href="https://discord.gg/TqKHVUa">Fireside Support Server</a>
                        </li>
                        <li className="list-unstyled Footer-LI">
                            <a className="Footer-Link" target="_blank" rel="noopener noreferrer" href="https://help.firesidebot.com">Fireside Documentation</a>
                        </li>
                        </ul>
                    </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3" style={{ background: "#0a0a0a" }}>
                    <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://firesidebot.com"> FiresideBOT.com </a>
                    </Container>
                </div>
                </MDBFooter>
            </div>
        );
    }
};

export default Footer;