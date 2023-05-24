import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function Packages() {
    return (
        <>
            <Container>
                <section className='packages'>
                    <div className='packages-header'>
                        <Row>
                            <Col lg={12}>
                                <h5 className='dash-style'>
                                EXPLORE GREAT PLACES
                                </h5>
                                <h2>POPULAR PACKAGES</h2>
                                <p>Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit,
                                    blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
                            </Col>
                        </Row>
                    </div>
                    <Row className='g-3'>
                        <Col md={6} lg={4}>
                            <Card className='packages-card rounded-0'>
                                <Card.Img className='rounded-0 img-hover' variant="top" src="https://demo.bosathemes.com/html/travele/assets/images/img5.jpg" />
                                <div className='price'>
                                    <Button className='my-auto'>
                                        <h6><span>$1,900</span> / per person</h6>
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
                                                <p><i class="bi bi-geo-alt-fill pe-1"></i> Malaysia </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Body className='p-0'>
                                        <div className='card-main'>
                                            <Card.Title>Sunset view of beautiful lakeside resident</Card.Title>
                                            <div className='review-area d-flex my-3'>
                                                <span>(25 reviews)</span>
                                                <div className='review d-flex ms-2 '>
                                                    <div className='colored-star'>
                                                        <i class="bi bi-star-fill"></i>
                                                        <i class="bi bi-star-fill"></i>
                                                        <i class="bi bi-star-fill"></i>
                                                    </div>
                                                    <div className='uncolored'>
                                                        <i class="bi bi-star-fill"></i>
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
                        <Col md={6} lg={4}>
                            <Card className='packages-card rounded-0'>
                                <Card.Img className='rounded-0 img-hover' variant="top" src="https://demo.bosathemes.com/html/travele/assets/images/img6.jpg" />
                                <div className='price'>
                                    <Button className='my-auto'>
                                        <h6><span>$1,230</span> / per person</h6>
                                    </Button>
                                </div>
                                <div className='main-body'>
                                    <div className='card-info text-light'>
                                        <div className='sub-info d-flex'>
                                            <div className='info-details '>
                                                <p><i class="bi bi-clock pe-1"></i> 5D/4N</p>
                                            </div>
                                            <div className='info-details mid '>
                                                <p><i class="bi bi-people-fill pe-1"></i>People: 8 </p>
                                            </div>
                                            <div className='info-details '>
                                                <p><i class="bi bi-geo-alt-fill pe-1"></i> Canada </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Body className='p-0'>
                                        <div className='card-main'>
                                            <Card.Title>Experience the natural beauty of island</Card.Title>
                                            <div className='review-area d-flex my-3'>
                                                <span>(17 reviews) </span>
                                                <div className='review ms-2 '>
                                                    <div className='colored-star  d-flex '>
                                                        <i class="bi bi-star-fill"></i>
                                                        <i class="bi bi-star-fill"></i>
                                                        <i class="bi bi-star-fill"></i>
                                                        <i class="bi bi-star-fill"></i>
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
                        <Col md={6} lg={4}>
                            <Card className='packages-card rounded-0'>
                                <Card.Img className='rounded-0 img-hover' variant="top" src="https://demo.bosathemes.com/html/travele/assets/images/img7.jpg" />
                                <div className='price'>
                                    <Button className='my-auto'>
                                        <h6><span>$2,000</span> / per person</h6>
                                    </Button>
                                </div>
                                <div className='main-body'>
                                    <div className='card-info text-light'>
                                        <div className='sub-info d-flex'>
                                            <div className='info-details '>
                                                <p><i class="bi bi-clock pe-1"></i> 6D/5N </p>
                                            </div>
                                            <div className='info-details mid '>
                                                <p><i class="bi bi-people-fill pe-1"></i> People: 5</p>
                                            </div>
                                            <div className='info-details '>
                                                <p><i class="bi bi-geo-alt-fill pe-1"></i> Portugal </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Body className='p-0'>
                                        <div className='card-main'>
                                            <Card.Title>Vacation to the water city of Portugal</Card.Title>
                                            <div className='review-area d-flex my-3'>
                                                <span>(22 reviews)</span>
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
                    </Row>
                    <Row className='text-center'>
                        <Col lg={12}>
                            <Button className='banner-btn' variant="primary">VIEW ALL PACKAGES</Button>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}

export default Packages
