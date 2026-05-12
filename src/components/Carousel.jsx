import React from 'react'
import 'bootstrap/dist/js/bootstrap.min.js';
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import './Carousel.css'

const Carousel = () => {
  return (
    <div>
      <div className='col-md-12'>
        <div id='mycarousel' className='carousel slide' data-bs-ride="carousel">


          <div className="carousel-indicators">
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="1"></button>
          </div>

          <div className='carousel-inner'>

            <div className='carousel-item active'>
              <img src={slide1} alt='Handbag 1' className='h-120px w-100 carousel-img'/>
            </div>

            {/* FIXED slide */}
            <div className='carousel-item'>
              <img src={slide2} alt='Handbag 2' className='h-120px w-100 carousel-img' />
            </div>

          </div>

          {/* Previous button */}
          <button 
            className="carousel-control-prev" 
            type="button" 
            data-bs-target="#mycarousel" 
            data-bs-slide="prev"
          >
            <span className='carousel-control-prev-icon bg-danger'></span>
            <span className='visually-hidden'>Previous</span>
          </button>

          {/* Next button */}
          <button 
            className="carousel-control-next" 
            type="button" 
            data-bs-target="#mycarousel" 
            data-bs-slide="next"
          >
            <span className='carousel-control-next-icon bg-danger'></span>
            <span className='visually-hidden'>Next</span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Carousel