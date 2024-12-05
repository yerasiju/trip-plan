import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/src/assets/images/3.jpg"
            className="d-block w-100"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Majestic Peaks</h5>
            <p>
              Breathe in the crisp air as you marvel at nature's towering
              wonders, where adventure and tranquility meet.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/src/assets/images/1.jpg"
            className="d-block w-100"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Timeless Heritage</h5>
            <p>
              Explore the echoes of history preserved in grand monuments of
              honor and remembrance
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/src/assets/images/2.jpg"
            className="d-block w-100"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Timeless Fortress</h5>
            <p>
              Walk through the echoes of history in a castle that has withstood
              the test of time, standing as a symbol of resilience and grandeur
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="/src/assets/images/4.jpg"
            className="d-block w-100"
            alt="Slide 4"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Ocean Bliss</h5>
            <p>
              Let the rhythmic waves and endless horizons whisk you away to a
              world of calm and wonder.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="/src/assets/images/5.jpg"
            className="d-block w-100"
            alt="Slide 5"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Sacred Serenity</h5>
            <p>
              Step into a realm of tranquility and timeless beauty, where
              tradition whispers through ornate halls.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
