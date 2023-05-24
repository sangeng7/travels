import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Destination() {
    return (
        <>
            <Container>
                <section className='packages-header pb-5'>
                    <Row>
                        <Col lg={7}>
                            <h5 className='dash-style'>
                                POPULAR DESTINATION
                            </h5>
                            <h2>TOP NOTCH DESTINATION</h2>
                        </Col>
                        <Col lg={5}>
                            <div className='heading-text'>
                                <p>Aperiam sociosqu urna praesent, tristique, corrupti condimentum
                                    asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.</p>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className='section-destination'>
                    <Row className='g-3'>
                        <Col lg={7}>
                            <Row className='g-3'>
                                <Col md={6} lg={6}>
                                    <div className='desti-item'>
                                        <div className='desti-item-img'>
                                            <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/img1.jpg'></img>
                                        </div>
                                        <Button className='desti-item-btn'>
                                            THAILAND
                                        </Button>
                                        <div className='desti-item-rating text-light'>
                                            <h3>Disney Land</h3>
                                            <div className='star-icon d-flex'>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} lg={6}>
                                    <div className='desti-item'>
                                        <div className='desti-item-img'>
                                            <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/img2.jpg'></img>
                                        </div>
                                        <Button className='desti-item-btn'>
                                            NORWAY
                                        </Button>
                                        <div className='desti-item-rating text-light'>
                                            <h3>Besseggen Ridge</h3>
                                            <div className='star-icon d-flex'>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={5}>
                            <Row className='g-3'>
                                <Col md={6} lg={12}>
                                    <div className='desti-item'>
                                        <div className='desti-item-img'>
                                            <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/img3.jpg'></img>
                                        </div>
                                        <Button className='desti-item-btn'>
                                            NEW ZEALAND
                                        </Button>
                                        <div className='desti-item-rating text-light'>
                                            <h3>Oxolotan City</h3>
                                            <div className='star-icon d-flex'>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} lg={12}>
                                    <div className='desti-item'>
                                        <div className='desti-item-img'>
                                            <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/img3.jpg'></img>
                                        </div>
                                        <Button className='desti-item-btn'>
                                            SINGAPORE
                                        </Button>
                                        <div className='desti-item-rating text-light'>
                                            <h3>Marina Bay Sand City</h3>
                                            <div className='star-icon d-flex'>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <Row className='text-center'>
                        <Col lg={12}>
                        <Button className='banner-btn' variant="primary">INQUIRE NOW</Button>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}

export default Destination
