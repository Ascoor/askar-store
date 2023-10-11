import React, { Component } from "react";
import '../../../css/BrandCard.css';
import Slider from "react-slick";
import Brand1 from '../../Images/brand-1.jpg';
import Brand2 from '../../Images/brand-2.png';
import Brand3 from '../../Images/brand-3.png';
import Brand4 from '../../Images/brand-4.png';

export default class BrandCard extends Component {
    // وضعت المتغيرات خارج الدالة render
    settings = {
        dots: true,
        infinite: true,
        speed: 5000, // زيادة السرعة لجعل التحرك بطيئًا
        autoplay: true, // تشغيل التحرك التلقائي
        autoplaySpeed: 5000, // الوقت بين التحولات التلقائية
        slidesToShow: 3,
        slidesToScroll: 1,
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


 products = [
    {
        name: "Brand 1",
       

        thumb: Brand1
    },
    {
        name: "Brand 2",
       

        thumb: Brand2
    },
    {
        name: "Brand 3",
       
   
        thumb: Brand3
    },
    {
        name: "Brand 4",
       

        thumb: Brand4
    },
    {
        name: "Brand 5",
       

        thumb: Brand1
    },
    {
        name: "Brand 6",
       
    
        thumb: Brand2
    },
    {
        name: "Brand 7",
       
  
        thumb: Brand3
    },
    {
        name: "Brand 8",
       

        thumb: Brand4
    }
];
    
render() {return (
    <Slider {...this.settings}>
        {this.products.map(brand => (
            <div className="brand-card" key={brand.name}>
                <img src={brand.thumb} alt={brand.name} />
          
            </div>
        ))}
    </Slider>
);

}
}