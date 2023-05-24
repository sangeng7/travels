import React from 'react'
import { Carousel, Col, Container, Form, Row } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Suscribe() {
    return (
        <>
            <section className='client'>
                <Container>
                    <div className='client-slider'>
                        <OwlCarousel className='owl-theme' loop margin={10} items={4} autoplay={true} responsiveClass={true}>
                        <img src="https://demo.bosathemes.com/html/travele/assets/images/logo1.png" />
                            
                        <img src="https://demo.bosathemes.com/html/travele/assets/images/logo2.png" />
                            
                        <img src="https://demo.bosathemes.com/html/travele/assets/images/logo3.png" />
                            
                        <img src="https://demo.bosathemes.com/html/travele/assets/images/logo4.png" />
                            
                        <img src="https://demo.bosathemes.com/html/travele/assets/images/logo5.png" />
                            
                        <img src="https://demo.bosathemes.com/html/travele/assets/images/logo6.png" />
                            
                        <img src="https://demo.bosathemes.com/html/travele/assets/images/logo7.png" />
                            
                        </OwlCarousel>
                    </div>
                </Container>
            </section>
            <section className='subscribe'>
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div className='subscribe-heading'>
                                <h5 className='dash-style text-light'>
                                    HOLIDAY PACKAGE OFFER
                                </h5>
                                <h2 className='text-light'> HOLIDAY SPECIAL 25% OFF !</h2>
                                <h4 className='text-light'>Sign up now to recieve hot special offers and information about the best tour
                                    packages, updates and discounts !!</h4>
                                <div className='sign-form'>
                                    <Form>
                                        <input type='email' placeholder='Your Email Address'></input>
                                        <input type='submit' value='SIGN UP NOW!'></input>
                                    </Form>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                                    pulvinar dapibus leo. Eaque adipiscing, luctus eleifend temporibus occaecat luctus eleifend tempo ribus.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Suscribe
