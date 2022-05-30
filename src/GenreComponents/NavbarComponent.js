import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";

export default function NavbarComponent() {
    return (
        <>
            <Navbar variant="dark" className="navbar">
                <Container fluid>
                    <Navbar.Brand href="/movies">
                        <p className="logoText">SOOFLIX</p>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing" className="navText">
                            About
                        </Nav.Link>
                        <Nav.Link href="/" className="navText">
                            Logout
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}