import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Bar from "./NavbarF";
import Side from "./Sidebar";
import Foot from "./Footer";
import cuadrado from '../Assets/img/prueba.png';


function Main() {
    return (
        <div className="body">
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Bar />
                </Col>
            </Row>
            <Row>
                <Col md="10">
                    <div className="mt-4">
                        <Container fluid>
                            <Row>

                                <Col md="4" lg="3" xl="2" >

                                    <img className="body-img" src={cuadrado}></img>
                                </Col>
                                <Col md="8" lg="8" xl="10">
                                    <h3>Head</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus arcu bibendum at varius vel. Molestie a iaculis at erat pellentesque adipiscing. Volutpat odio facilisis mauris sit amet.                                    </p>
                                    <a href="#">Read More</a>
                                </Col>
                                <hr />
                            </Row>
                        </Container>
                        <Container fluid>
                            <Row>
                                <Col md="4" lg="3" xl="2" >
                                    <img className="body-img" src={cuadrado}></img>
                                </Col>
                                <Col md="8" lg="8" xl="10">
                                    <h3>Head</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus arcu bibendum at varius vel. Molestie a iaculis at erat pellentesque adipiscing. Volutpat odio facilisis mauris sit amet.
                                    </p>
                                    <a href="#">Read More</a>
                                </Col>
                                <hr />
                            </Row>
                        </Container>
                        <Container fluid>
                            <Row>
                                <Col md="4" lg="3" xl="2" >
                                    <img className="body-img" src={cuadrado}></img>
                                </Col>
                                <Col md="8" lg="8" xl="10">
                                    <h3>Head</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus arcu bibendum at varius vel. Molestie a iaculis at erat pellentesque adipiscing. Volutpat odio facilisis mauris sit amet.                                    </p>
                                    <a href="#">Read More</a>
                                </Col>
                                <hr />
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col>
                    <Side />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Foot />
                </Col>

            </Row>
        </div>
    )
}

export default Main;