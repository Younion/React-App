import Carousel from 'react-bootstrap/Carousel'

const SauceCarousel = ({ sauceData }) => {  

    return (
      <div className='container-fluid' >  
      <Carousel>
      <Carousel.Item style={{'height':"300px"}} >  
        <Carousel.Caption>  
          {sauceData.map((records) => (
              <h3>{records.Name}</h3> 
            ))}
            </Carousel.Caption>  
            </Carousel.Item  >  
            <Carousel.Item style={{'height':"300px"}}>  
                  <Carousel.Caption>  
              <h3>Second Demo</h3>  
                </Carousel.Caption>  
                    </Carousel.Item>  
                  <Carousel.Item style={{'height':"300px"}}>  
                  <Carousel.Caption>  
                    <h3>Third Demo</h3>  
                    </Carousel.Caption>  
                    </Carousel.Item>  
                  </Carousel>  
        </div>
      )  
    }  
    
export default SauceCarousel  
