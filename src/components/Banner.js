import React from 'react'
import { Button } from 'react-bootstrap'

function Banner() {
  return (
    <>
      <div className='banner'>
          <div className='container '>
            <div className='banner-text position-relative text-light text-center mx-auto'>
              <h1 className='mb-4 text-light'>TRAVELLING AROUND THE WORLD</h1>
              <p className='mb-5'>Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic proident ullam, eaque donec delectus
                tempor consectetur nunc, purus congue? Rem volutpat sodales! Mollit. Minus exercitationem wisi.</p>
              <Button className='banner-btn' variant="primary">CONTINUE READING</Button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Banner
