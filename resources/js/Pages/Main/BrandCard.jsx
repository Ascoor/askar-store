import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "../../../css/BrandCard.css";

const BrandCard = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrandsData = async () => {
      try {
        const response = await axios.get("/brands-data");
        console.log(response.data); // Log the response
        setBrands(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching brands data: ", error);
      }
    };
  
    fetchBrandsData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };  

  const exampleImages = [
    {
      name: "Example 1",
    },
    {
      name: "Example 2",
    },
    {
      name: "Example 3",
    },
    {
      name: "Example 4",
    },
    {
      name: "Example 5",
    },
  ];

  return (
    <Slider {...settings}>
      {loading ? (
        <div>Loading...</div>
      ) : brands.length > 0 ? (
        brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <img
              src={`/storage/${brand.image_path}`}
              alt={brand.name}
              className="brand-image"
            />
          </div>
        ))
      ) : (
        exampleImages.map((example, index) => (
          <div key={index} className="brand-card">
            <div className="example-overlay">
              <h2>{example.name}</h2>
            </div>
          </div>
        ))
      )}
    </Slider>
  );
};

export default BrandCard;
