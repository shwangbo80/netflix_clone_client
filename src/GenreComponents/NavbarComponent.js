import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";

export default function NavbarComponent() {
    return (
        <>
            <Navbar variant="dark" className="navbar">
                <Container fluid>
                    <Navbar.Brand href="/moviesç">
                        <p className="logoText">NETFLIX</p>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/about" className="navText">
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
