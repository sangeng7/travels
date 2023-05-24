import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Activity() {
    return (
        <>
            <Container>
                <section className='activity-section'>
                    <div className=' activity-header text-center'>
                        <Row>
                            <Col lg={12}>
                                <h5 className='dash-style'>
                                    TRAVEL BY ACTIVITY
                                </h5>
                                <h2>ADVENTURE & ACTIVITY</h2>
                                <p>Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit,
                                    blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
                            </Col>
                        </Row>
                    </div>

                    <Row className='g-3'>
                        <Col md={4} lg={2}>
                            <div className='activity-item text-center'>
                                <div className='activity-icon'>
                                    <img src='https://demo.bosathemes.com/html/travele/assets/images/icon6.png'></img>
                                </div>
                                <h6>Adventure</h6>
                                <p>15 Destination</p>
                            </div>
                        </Col>
                        <Col md={4} lg={2}>
                            <div className='activity-item text-center'>
                                <div className='activity-icon'>
                                    <img src='https://demo.bosathemes.com/html/travele/assets/images/icon10.png'></img>
                                </div>
                                <h6>Trekking</h6>
                                <p>12 Destination</p>
                            </div>
                        </Col>           
                        <Col md={4} lg={2}>
                            <div className='activity-item text-center'>
                                <div className='activity-icon'>
                                    <img src='https://demo.bosathemes.com/html/travele/assets/images/icon9.png'></img>
                                </div>
                                <h6>Camp Fire</h6>
                                <p>7 Destination</p>
                            </div>
                        </Col>
                        <Col md={4} lg={2}>
                            <div className='activity-item text-center'>
                                <div className='activity-icon'>
                                    <img src='https://demo.bosathemes.com/html/travele/assets/images/icon8.png'></img>
                                </div>
                                <h6>Off Road</h6>
                                <p>15 Destination</p>
                            </div>
                        </Col>
                        <Col md={4} lg={2}>
                            <div className='activity-item text-center'>
                                <div className='activity-icon'>
                                    <img src='https://demo.bosathemes.com/html/travele/assets/images/icon7.png'></img>
                                </div>
                                <h6>Camping</h6>
                                <p>13 Destination</p>
                            </div>
                        </Col>
                        <Col md={4} lg={2}>
                            <div className='activity-item text-center'>
                                <div className='activity-icon'>
                                    <img src='https://demo.bosathemes.com/html/travele/assets/images/icon11.png'></img>
                                </div>
                                <h6>Exploring</h6>
                                <p>25 Destination</p>
                            </div>
                        </Col>
                    </Row>

                </section>
            </Container>
        </>
    )
}

export default Activity
