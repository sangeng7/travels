import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <section className='footer'>
        <div className='top-footer'>
          <Container>
            <Row>
              <Col md={6} lg={3}>
                <div className='top-footer-details text-light'>
                  <h3>ABOUT TRAVEL</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  <div className='footer-top-img d-flex justify-content-between align-items-center'>
                    <div className='footer-img1 me-2'>
                      <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/logo6.png'></img>
                    </div>
                    <div className='footer-img2'>
                      <img className='w-100' src='https://demo.bosathemes.com/html/travele/assets/images/logo2.png'></img>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className='top-footer-details text-light'>
                  <h3>CONTACT INFORMATION</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <ul>
                    <li><i class="bi bi-telephone-fill me-2"></i>+01 (977) 2599 12</li>
                    <li><i class="bi bi-envelope-fill me-2"></i> company@domain.com</li>
                    <li><i class="bi bi-geo-alt-fill me-2"></i> 3146 Koontz, California</li>
                  </ul>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className='top-footer-details text-light top-down'>
                  <h3>LATEST POST</h3>
                  <div className='top-text'>
                    <h5>Life is a beautiful journey not a destination</h5>
                    <p>August 17, 2021 | <span>No Comments</span></p>
                  </div>
                  <div className='top-text border-0'>
                    <h5>Life is a beautiful journey not a destination</h5>
                    <p>August 17, 2021 | <span>No Comments</span></p>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className='top-footer-details text-light'>
                  <h3>SUBSCRIBE US</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className='suscribe-btn'>
                    <input type='email' placeholder='Your Email..' ></input>
                    <input type='submit' value='SUBSCRIE NOW'></input>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='bottom-footer'>
          <Container>
            {/* <div className='d-flex align-items-center justify-content-between'>
              <div className='bottom-footer-left'>
                <ul className='d-flex text-light'>
                  <li className='border-0'>Privacy Policy</li>
                  <li>Term & Condition</li>
                  <li className='border-0'>FAQ</li>
                </ul>
              </div>
              <div className='bottom-footer-mid'>
                <div className='bottom-footer-logo'>
                  <img src='https://demo.bosathemes.com/html/travele/assets/images/travele-logo.png'></img>
                </div>
              </div>
              <div className='bottom-footer-left'>
                <h5>
                Copyright © 2021 Travele. All rights reserveds
                </h5>
              </div>
            </div> */}
            <Row className=' align-items-center'>
              <Col xs={12} lg={5}>
              <div className='bottom-footer-left'>
                <ul className='d-flex text-light'>
                  <li className='border-0'>Privacy Policy</li>
                  <li>Term & Condition</li>
                  <li className='border-0'>FAQ</li>
                </ul>
              </div>
              </Col>
              <Col xs={12} lg={2}>
              <div className='bottom-footer-mid'>
                <div className='bottom-footer-logo'>
                  <img src='https://demo.bosathemes.com/html/travele/assets/images/travele-logo.png'></img>
                </div>
              </div>
              </Col>
              <Col xs={12} lg={5}>
              <div className='bottom-footer-right'>
              <h5>
                Copyright © 2021 Travele. All rights reserveds
                </h5>
              </div>
              </Col>
            </Row>

          </Container>
        </div>
      </section>
    </>
  )
}

export default Footer
