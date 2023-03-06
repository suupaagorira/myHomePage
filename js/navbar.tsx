import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const TopNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/top">スパゴリサーバー</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/top">トップメニュー</Nav.Link>
                        <Nav.Link href="/about">概要</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default TopNavbar;
