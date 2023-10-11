import React, { Component } from "react";
import '../../../css/ProductCard.css';
import Slider from "react-slick";
// Fake data

export default class ProductCard extends Component {
    // وضعت المتغيرات خارج الدالة render
    settings = {
        dots: true,
        rtl:true,
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
        name: "Product 1",
        description: "This is a description for product 1.",
        price: "$100",
        category: "Electronics",
        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Product 2",
        description: "This is a description for product 2.",
        price: "$150",
        category: "Fashion",
        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Product 3",
        description: "This is a description for product 3.",
        price: "$200",
        category: "Home Appliances",
        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Product 4",
        description: "This is a description for product 4.",
        price: "$50",
        category: "Books",
        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Product 5",
        description: "This is a description for product 5.",
        price: "$300",
        category: "Sports",
        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Product 6",
        description: "This is a description for product 5.",
        price: "$300",
        category: "Sports",
        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Product 7",
        description: "This is a description for product 5.",
        price: "$300",
        category: "Sports",
        thumb: "https://via.placeholder.com/150"
    },
    {
        name: "Product 8",
        description: "This is a description for product 5.",
        price: "$300",
        category: "Sports",
        thumb: "https://via.placeholder.com/150"
    }
];
    
render() {return (
    <Slider {...this.settings}>
        {this.products.map(product => (
            <div className="product-card" key={product.name}>
                <img src={product.thumb} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Category:</strong> {product.category}</p>
            </div>
        ))}
    </Slider>
);

}
}