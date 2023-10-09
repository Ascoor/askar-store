// MainCarousel.jsx

import React from 'react';

const MainCarousel = () => {
    return (
        <div className="carousel slide" id="mainCarousel" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/carousel-2.jpg" className="d-block w-100" alt="Slide 1" />
                    <div className="carousel-caption">
                        <h5>Slide 1 Title</h5>
                        <p>Slide 1 Description</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/carousel-2.jpg" className="d-block w-100" alt="Slide 2" />
                    <div className="carousel-caption">
                        <h5>Slide 2 Title</h5>
                        <p>Slide 2 Description</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/carouser-3.jpg" className="d-block w-100" alt="Slide 3" />
                    <div className="carousel-caption">
                        <h5>Slide 3 Title</h5>
                        <p>Slide 3 Description</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default MainCarousel;
