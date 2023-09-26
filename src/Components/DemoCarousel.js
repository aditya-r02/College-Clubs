import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const renderSlides = [
    " https://i.ibb.co/ncrXc2V/1.png",
 "https://i.ibb.co/B3s7v4h/2.png",
 "https://i.ibb.co/XXR8kzF/3.png",
 "https://i.ibb.co/yg7BSdM/4.png"
     ];

    

class DemoCarousel extends Component {

    render() {
        return (
            <div>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true} 
                width={300}
                showThumbs={false}
                showStatus={false}
             >

                {renderSlides.map((s) => (
                    <div key={1}>
                        <img src={s} alt={s} />
                        <p className="legend">Legend 1</p>
                    </div>

                ))
                }

            </Carousel>
            </div>
        );
    }
};

export default DemoCarousel



