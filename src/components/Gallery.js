import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Gallery() {
    return (
        <>
            <section className='gallery'>
                <Container>

                    <Row>
                        <Col lg={5}>
                            <div className='gallery-header'>
                                <h5 className='dash-style'>
                                    OUR TOUR GALLERY
                                </h5>
                                <h2>BEST TRAVELER'S SHARED PHOTOS</h2>
                                <p>Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu.
                                    Nostrud. Esse? Aut nostrum, ornare quas provident laoreet nesciunt odio voluptates etiam, omnis.</p>
                            </div>
                            <div className='gallery-img'>
                                <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/img12.jpg'></img>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Row>
                                <Col md={6} lg={6}>
                                    <div className='gallery-img'>
                                        <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/img13.jpg'></img>
                                    </div>
                                </Col>
                                <Col md={6} lg={6}>
                                    <div className='gallery-img'>
                                        <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/img14.jpg'></img>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} lg={12}>
                                    <div className='gallery-img'>
                                        <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/img15.jpg'></img>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                       

                    </Row>
                    {/* <div className='gallery-header'>

                    </div> */}

                </Container>
            </section>
        </>
    )
}

export default Gallery
