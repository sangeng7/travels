import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function Tour() {
    const [Hotel, setHotel] = useState([])
    useEffect(() => {
        axios.get('data/hotel.json')
            .then(res => {
                console.log(res.data);
                setHotel(res.data)
            });
    }, [])
    return (
        <>
            <>
                <Container>
                    <section className='tour-heading py-5 text-center'>
                        <Row>
                            <Col lg={12}>
                                <h5 className='dash-style'>
                                    POPULAR HOTELS
                                </h5>
                                <h2>TOP HOTELS RECOMMENDATION</h2>
                            </Col>
                            <Col lg={12}>
                                <div className='heading-text'>
                                    <p>Aperiam sociosqu urna praesent, tristique, corrupti condimentum
                                        asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <Row className='g-4 pb-5'>
                        {Hotel.map((a) => (
                            <Col md={6} lg={4}>
                                <Card className='packages-card rounded-0'>
                                    <Card.Img className='rounded-0 img-hover' variant="top" src={a.img} />
                                    <div className='price'>
                                        <Button className='my-auto'>
                                            <h6><span>${a.price}</span> / per person</h6>
                                        </Button>
                                    </div>
                                    <div className='main-body'>
                                        <div className='card-info text-light'>
                                            <div className='sub-info d-flex'>
                                                <div className='info-details '>
                                                    <p><i class="bi bi-clock pe-1"></i> 7D/6N</p>
                                                </div>
                                                <div className='info-details mid '>
                                                    <p><i class="bi bi-people-fill pe-1"></i> People: 5</p>
                                                </div>
                                                <div className='info-details '>
                                                    <p><i class="bi bi-geo-alt-fill pe-1"></i>{a.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Card.Body className='p-0'>
                                            <div className='card-main'>
                                                <Card.Title>{a.title}</Card.Title>
                                                <div className='review-area d-flex my-3'>
                                                    <span>{a.review}</span>
                                                    <div className='review d-flex ms-2 '>
                                                        <div className='colored-star'>
                                                            <i class="bi bi-star-fill"></i>
                                                            <i class="bi bi-star-fill"></i>
                                                            <i class="bi bi-star-fill"></i>
                                                            <i class="bi bi-star-fill"></i>
                                                        </div>
                                                        <div className='uncolored'>
                                                            <i class="bi bi-star-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Card.Text className='my-3'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus,
                                                    luctus nec ullam elit tellpus.
                                                </Card.Text>

                                            </div>
                                            <div className='card-btn d-flex'>
                                                <div className='sub-btn'>
                                                    <span>Book Now</span><i class="bi bi-arrow-right ms-2"></i>
                                                </div>
                                                <div className='sub-btn'>
                                                    <span>Wish List</span><i class="bi bi-heart ms-2"></i>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </div>

                                </Card>
                            </Col>
                        ))}
                    </Row>
                    
                </Container>
            </>
        </>
    )
}

export default Tour
