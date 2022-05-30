import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
export default function Home() {
    return (
        <Container fluid className="homeComponent">
            <Row>
                <Col md={7} className="grid titleBg">
                    <div>
                        <h1 className="px-5 sooflixText">NETFLIX</h1>
                        <h4 className="text-light text-center">
                            Movies, dramas, and more for everyone
                        </h4>
                    </div>
                </Col>
                <Col md={5} className="grid bg-light">
                    <Form className="loginForm">
                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="formPlaintextEmail">
                            <Col md="12">
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Username"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="formPlaintextPassword">
                            <Col md="12">
                                <Form.Control
                                    size="lg"
                                    type="password"
                                    placeholder="Password"
                                />
                            </Col>
                        </Form.Group>
                        <Button variant="danger" type="submit" href="/movies">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
