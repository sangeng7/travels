import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Callback() {
    return (
        <>
            <section className='callback-section'>
                <Container>
                    <Row>
                        <Col xs={12} lg={5}>
                            <div className='callback-img'>

                            </div>
                        </Col>
                        <Col xs={12} lg={7}>
                            <section className='section-heading'>
                                <Row>
                                    <Col lg={12} className='text-white mb-5'>
                                        <h5 className='dash-style'>
                                            CALLBACK FOR MORE
                                        </h5>
                                        <h2 className='pb-3'>GO TRAVEL. DISCOVER. REMEMBER US!!</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend.</p>
                                    </Col>
                                </Row>

                                <Row className='callback-counter'>
                                    <Col xs={6} lg={6} className='counter-items d-flex align-items-center'>
                                        <div className='counter-items-img'>
                                            <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/icon1.png'></img>
                                        </div>
                                        <div className='counter-content text-center'>
                                            <h2>500K+</h2>
                                            <p>Satisfied Clients</p>
                                        </div>
                                    </Col>
                                    <Col  xs={6} lg={6} className='counter-items d-flex align-items-center border-end-0'>
                                        <div className='counter-items-img'>
                                            <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/icon2.png'></img>
                                        </div>
                                        <div className='counter-content text-center'>
                                            <h2>250K+</h2>
                                            <p>Satisfied Clients</p>
                                        </div>
                                    </Col>
                                    <Col xs={6}  lg={6} className='counter-items d-flex align-items-center border-bottom-0'>
                                        <div className='counter-items-img'>
                                            <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/icon3.png'></img>
                                        </div>
                                        <div className='counter-content text-center'>
                                            <h2>15K+</h2>
                                            <p>Satisfied Clients</p>
                                        </div>
                                    </Col>
                                    <Col  xs={6} lg={6} className='counter-items d-flex align-items-center border-bottom-0 border-end-0'>
                                        <div className='counter-items-img'>
                                            <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/icon4.png'></img>
                                        </div>
                                        <div className='counter-content text-center'>
                                            <h2>10K+</h2>
                                            <p>Satisfied Clients</p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={10}>
                                        <div className='contact d-flex align-items-center'>
                                            <div className='contact-icon'>
                                                <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/icon5.png'></img>
                                            </div>
                                            <div className='contact-number'>
                                                <p>Our 24/7 Emergency Phone Services</p>
                                                <h4>Call: 123-456-7890</h4>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Callback
