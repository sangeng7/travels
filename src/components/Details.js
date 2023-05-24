import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function Details() {
  return (
    <>
      <section className='details'>
        <div className='details-bg '>
          <div className='details-box container'>
            <div className='input-box'>
              <Form.Label>Search Destination*</Form.Label>
              <Form.Control className='abc' type="text" placeholder="Enter Destination" />
            </div>
            <div className='input-box'>
              <Form.Label>Pax Number*</Form.Label>
              <Form.Control className='abc' type="text" placeholder="No.of People" />
            </div>
            <div className='input-box '>
              <Form.Label>Checkin Date*
              </Form.Label>
              <Form.Control className='abc' type="date" placeholder="MM / DD / YY" />
            </div>
            <div className='input-box'>
              <Form.Label>Checkout Date*</Form.Label>
              <Form.Control className='abc' type="date" placeholder="MM / DD / YY" />
            </div>
            <div className='input-box'>
            <Button className='banner-btn' variant="primary">INQUIRE NOW</Button>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Details
