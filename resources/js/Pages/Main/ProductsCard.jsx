import React, { Component } from "react";
import '../../../css/ProductCard.css';
import Slider from "react-slick";
import Product1 from '../../Images/product-1.jpg';
import Product2 from '../../Images/product-2.jpg';
import Product3 from '../../Images/product-3.jpg';
import Product4 from '../../Images/product-4.webp';
import Product5 from '../../Images/product-5.jpg';
import Product6 from '../../Images/product-6.jpg';
import Product7 from '../../Images/product-7.jpg';
import Product8 from '../../Images/product-8.jpg';

export default class ProductCard extends Component {
    settings = {
        dots: true,
        rtl: true,
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 5000,
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
            thumb: Product1
        },
        {
            name: "Product 2",
            description: "This is a description for product 2.",
            price: "$150",
            category: "Fashion",
            thumb: Product2
        },
        {
            name: "Product 3",
            description: "This is a description for product 3.",
            price: "$200",
            category: "Home Appliances",
            thumb: Product3
        },
        {
            name: "Product 4",
            description: "This is a description for product 4.",
            price: "$50",
            category: "Books",
            thumb: Product4
        },
        {
            name: "Product 5",
            description: "This is a description for product 5.",
            price: "$300",
            category: "Sports",
            thumb: Product5
        },
        {
            name: "Product 6",
            description: "This is a description for product 5.",
            price: "$300",
            category: "Sports",
            thumb: Product6
        },
        {
            name: "Product 7",
            description: "This is a description for product 5.",
            price: "$300",
            category: "Sports",
            thumb: Product8
        },
        {
            name: "Product 8",
            description: "This is a description for product 5.",
            price: "$300",
            category: "Sports",
            thumb: Product7
        }
    ];

    render() {
        return (
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
