import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from '../../../../public/images/car-1.webp';
import Img2 from '../../../../public/images/car-2.webp';
import Img3 from '../../../../public/images/car-3.webp';

export default class MainCarousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,  // Make it loop
            speed: 500,
            rtl: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,  // Enable autoplay
            autoplaySpeed: 3000,  // 3 seconds per slide
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div>
                        <img src={Img2} alt="Slide 2" />
                    </div>
                    <div>
                        <img src={Img1} alt="Slide 1" />
                    </div>
                    <div>
                        <img src={Img3} alt="Slide 3" />
                    </div>
                </Slider>
            </div>
        );
    }
}
