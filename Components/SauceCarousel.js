import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Carousel from 'react-bootstrap/Carousel';

const SauceCarousel = ({ sauceName }) => {  
    return (

      <div className='container-fluid'>

        <Carousel>
          {sauceName.map(items => (
            <Carousel.Item key={items.id}>
            <Carousel.Caption>
              <h3>{items.Name}</h3>
              <p>{items['Average Rating']}</p>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
        </Carousel>

      </div>
      )  
    }  
    
export default SauceCarousel  
