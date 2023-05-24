import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Agents() {
    return (
        <>
            <section className='agents'>
                <Container>
                    <div className='agents-header activity-header text-center position-relative'>
                        <Row>
                            <Col lg={12}>
                                <h5 className='dash-style'>
                                    OUR AGENTS
                                </h5>
                                <h2>HIRE YOUR TOUR GUIDE!</h2>
                                <p>Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit,
                                    blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
                            </Col>
                        </Row>
                    </div>
                    <div className='agents-info text-center'>
                        <Row>
                            <Col md={6} lg={4}>
                                <div className='agents-img'>
                                    <div className='agents-img-ani'>
                                        <img src='https://nepalwanders.com/wp-content/uploads/2016/12/1.jpg'></img>
                                        <i class="bi bi-chat-dots-fill"></i>
                                    </div>
                                    <p className='pt-3'>Tshering Wongdi Sherpa</p>

                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className='agents-img'>
                                    <div className='agents-img-ani'>
                                        <img src='https://nepalwanders.com/wp-content/uploads/2016/11/IMG_4245.jpg'></img>
                                        <i class="bi bi-chat-dots-fill"></i>
                                    </div>
                                    <p className='pt-3'>Gelbu Sherpa</p>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>    <div className='agents-img'>
                                <div className='agents-img-ani'>
                                    <img src='https://nepalwanders.com/wp-content/uploads/2016/12/2.jpg'></img>
                                    <i class="bi bi-chat-dots-fill"></i>
                                </div>
                                <p className='pt-3'>Dawa Sherpa</p>
                            </div></Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Agents
