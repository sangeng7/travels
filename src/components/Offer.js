import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Offer() {
    return (
        <>
            <Container>
                <section className='section-offer'>
                    <div className='activity-header text-center'>
                        <Row>
                            <Col lg={12}>
                                <h5 className='dash-style'>
                                    TRAVEL OFFER & DISCOUNT

                                </h5>
                                <h2> SPECIAL TRAVEL OFFER</h2>
                                <p>Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit,
                                    blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
                            </Col>
                        </Row>
                    </div>
                    <Row className='g-4'>
                        <Col md={6} lg={4}>
                            <div className='offer-card'>
                                <div className='offer-img'>
                                    <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/img9.jpg'></img>
                                </div>
                                <div className='offer-badge'>
                                    <span><strong>20%</strong>
                                        off
                                    </span>
                                </div>
                                <div className='offer-content'>
                                    <p>CANADA</p>
                                    <h4>Experience the natural beauty of glacier</h4>
                                    <div className='offer-price'>
                                        Price:
                                        <del>$1500</del>
                                       <ins className='mx-2'> $1200</ins>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className='offer-card'>
                                <div className='offer-img'>
                                    <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/img10.jpg'></img>
                                </div>
                                <div className='offer-badge'>
                                    <span><strong>15%</strong>
                                        off
                                    </span>
                                </div>
                                <div className='offer-content'>
                                    <p>NEW ZEALAND</p>
                                    <h4>Trekking to the mountain camp site</h4>
                                    <div className='offer-price'>
                                        Price:
                                        <del>$1300 </del>
                                       <ins className='mx-2'> $1105</ins>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className='offer-card'>
                                <div className='offer-img'>
                                    <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/img11.jpg'></img>
                                </div>
                                <div className='offer-badge'>
                                    <span><strong>15%</strong>
                                        off
                                    </span>
                                </div>
                                <div className='offer-content'>
                                    <p>MALAYSIA</p>
                                    <h4>Sunset view of beautiful lakeside city</h4>
                                    <div className='offer-price'>
                                        Price:
                                        <del>$1800</del>
                                       <ins className='mx-2'> $1476</ins>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>

                </section>
            </Container>
        </>
    )
}

export default Offer
