import React from 'react'
import { Button, Col, Container, NavDropdown, Row } from 'react-bootstrap'
import { Nav, Navbar, } from 'react-bootstrap'
import Banner from './Banner'
import { Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import Tour from './Tour';
import Home from './Home';
function Header() {
    return (
        <>
            <section className='header'>
                <div className='header-top '>
                    <div className='container text-light'>
                        <Row className='d-flex align-items-center'>
                            <Col lg={8}>
                                <div className='header-left'>
                                    <ul className='d-flex justify-content-start align-items-center'>
                                        <li><i class="bi bi-telephone-fill pe-2"></i>+01 (977) 2599 12</li>
                                        <li><i class="bi bi-envelope-fill pe-2"></i>company@domain.com</li>
                                        <li><i class="bi bi-geo-alt-fill pe-2"></i>3146 Koontz Lane, California</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='header-right d-flex justify-content-end align-items-center'>
                                    <div className='header-icons'>
                                        <ul className='d-flex'>
                                            <li><a href='#'><i class="bi bi-facebook"></i></a></li>
                                            <li> <a href='#'><i class="bi bi-twitter"></i></a></li>
                                            <li><a href='#'><i class="bi bi-instagram"></i></a></li>
                                            <li><a href='#'><i class="bi bi-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className='header-search-icon'>
                                        <button className='px-3 py-2'>
                                            <i class="bi bi-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <Navbar className='header-bottom py-3' expand="lg">
                        <Container className='text-light'>
                            <div className='logo pe-5' href="#home">
                                <img src='https://demo.bosathemes.com/html/travele/assets/images/travele-logo.png' className='w-100'></img>
                            </div>
                            <div className='logo1 pe-5' href="#home">
                                <img src='https://demo.bosathemes.com/html/travele/assets/images/travele-logo1.png' className='w-100'></img>
                            </div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav text-light">
                                <Nav className="mx-auto px-3">
                                    <LinkContainer to="/"><Nav.Link className='text-light'>HOME</Nav.Link></LinkContainer>
                                    <LinkContainer to="/tour"><Nav.Link className='text-light'>TOUR</Nav.Link></LinkContainer>
                                    <NavDropdown title="PAGES" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="BLOG" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>   SHOP BLOG DASHBOARD
                                    </NavDropdown>

                                    <Nav.Link href="#link" className='text-light'>SHOP</Nav.Link>
                                    <Nav.Link href="#link" className='text-light'>DASHBOARD</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                            <button className='btn-book btn ms-auto '>
                                <a href='#'>BOOK NOW</a>
                            </button>
                        </Container>
                    </Navbar>

                </div>
                <Banner />
            </section>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tour" element={<Tour />} />
            </Routes>

        </>
    )
}

export default Header
