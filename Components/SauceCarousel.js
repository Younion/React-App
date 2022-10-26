
import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'

const SauceCarousel = ({ sauceData }) => {  

    return (  
      <div className='container-fluid' >  
      <Carousel>  
      <Carousel.Item style={{'height':"300px"}} >  
      {/* <img style={{'height':"300px"}}  
      className="d-block w-100"  
      src={'assets/img/img2.jpg'}  />   */}
      {/* {sauceData.fields.Name} */}
        <Carousel.Caption>  
          <h3>First Demo </h3>  
            </Carousel.Caption>  
            </Carousel.Item  >  
            <Carousel.Item style={{'height':"300px"}}>  
            {/* <img style={{'height':"300px"}}  
              className="d-block w-100"  
              src={'assets/img/img1.jpg'}    />   */}
                  <Carousel.Caption>  
              <h3>Second Demo</h3>  
                </Carousel.Caption>  
                    </Carousel.Item>  
                  <Carousel.Item style={{'height':"300px"}}>  
                  {/* <img style={{'height':"300px"}}  
                  className="d-block w-100"  
                    src={'assets/img/img3.jpg'}   />   */}
                  <Carousel.Caption>  
                    <h3>Third Demo</h3>  
                    </Carousel.Caption>  
                    </Carousel.Item>  
                  </Carousel>  
        </div>
        )  
  
    }  
      
    export default SauceCarousel  
