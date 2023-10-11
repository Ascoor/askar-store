import React, { Component } from "react";
import '../../../css/BrandCard.css';
import Slider from "react-slick";
// Fake data

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
        description: "This is a description for brand 1.",

        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Brand 2",
        description: "This is a description for brand 2.",

        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Brand 3",
        description: "This is a description for brand 3.",
   
        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Brand 4",
        description: "This is a description for brand 4.",

        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Brand 5",
        description: "This is a description for brand 5.",

        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Brand 6",
        description: "This is a description for brand 5.",
    
        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Brand 7",
        description: "This is a description for brand 5.",
  
        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Brand 8",
        description: "This is a description for brand 5.",

        thumb: "https://via.placeholder.com/150"
    }
];
    
render() {return (
    <Slider {...this.settings}>
        {this.products.map(brand => (
            <div className="brand-card" key={brand.name}>
                <img src={brand.thumb} alt={brand.name} />
                <h2>{brand.name}</h2>
                <p>{brand.description}</p>
          
            </div>
        ))}
    </Slider>
);

}
}