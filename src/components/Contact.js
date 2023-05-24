import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Contact() {
    return (
        <>
            <section className='contactus'>
                <Container>
                    <Row>
                        <Col xs={12} lg={4}>
                            <div className='contactus-img'>
                                <img className='w-100' src='	https://demo.bosathemes.com/html/travele/assets/images/img24.jpg'></img>
                            </div>
                        </Col>
                        <Col xs={12} lg={8}>
                            <div className='contactus-div'>
                                <Row>
                                    <Col md={4} xs={12} lg={4}>
                                        <div className='contactus-details'>
                                            <div className='contactus-icons'>
                                                <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/icon12.png'></img>
                                            </div>
                                            <ul>
                                                <li>support@gmail.com</li>
                                                <li>info@domain.com</li>
                                                <li>name@company.com</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={4} xs={12} lg={4}>
                                        <div className='contactus-details'>
                                            <div className='contactus-icons'>
                                                <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/icon13.png'></img>
                                            </div>
                                            <ul>
                                                <li>+132 (599) 254 669</li>
                                                <li>+123 (669) 255 587</li>
                                                <li>+01 (977) 2599 12</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={4} xs={12} lg={4}>
                                        <div className='contactus-details border-0'>
                                            <div className='contactus-icons'>
                                                <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/icon14.png'></img>
                                            </div>
                                            <ul>
                                                <li>3146 Koontz, California</li>
                                                <li>Quze.24 Second floor</li>
                                                <li>36 Street, Melbourne</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='contactus-btn d-flex justify-content-between'>
                                <h3 className='text-light'>LET'S JOIN US FOR MORE UPDATE !!</h3>
                                <Button>
                                    LEARN MORE
                                </Button>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Contact
