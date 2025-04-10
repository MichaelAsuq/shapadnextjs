'use client';

import { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Replay the video
    }
  };



  return (
    <section className='bg-black'>
      <div className='container-fluid p-o'>
        <div className='row justify-content-center align-items-stretch'>
          <div className='col-md-12 col-sm-12 p-0'>
            {/* Background Image */}

            <video ref={videoRef} autoPlay muted loop playsInline onEnded={handleVideoEnd} className='p-0' style={{ width: '100%', height: '100%', }}>
              <source src='/Images/shapadIntro.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>


          </div>

        </div>


        {/* Carousel Content */}



        {/* Styles */}
        <style jsx>{`
        .hero-carousel-container {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
            margin-top: 0; 
    padding-top: 0;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 610px;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .carousel-wrapper {
          position: relative;
          z-index: 10;
          height: auto;
          
          display: flex;
          align-items: center;
          padding-top: 180px;
        }

        :global(.hero-carousel) {
          width: 100%;
          text-align: left;
        }

        :global(.carousel-content) {
           padding: 0 15px 0 50px;
          max-width: 800px;
            margin-left: 50px;
          color: white;
           text-align: left;
        }

        :global(.carousel-title) {
          font-size: 6rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
           text-align: left;

        }

        :global(.carousel-description) {
          font-size: 1.25rem;
          font-weight: 400;
          margin-bottom: 2rem;
           text-align: left;
           line-height: 2rem;
        }

        :global(.carousel-cta) {
          display: inline-block;
          color: white;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        :global(.carousel-cta:hover) {
          color: #FF6B00;
          transform: translateY(-2px);
        }

        /* Custom carousel controls styling */
        :global(.carousel-control-prev),
        :global(.carousel-control-next) {
          width: 5%;
          opacity: 0.7;
        }

        :global(.carousel-indicators) {
          margin-bottom: 3rem;
         justify-content: flex-start;
          margin-left: 100px;
          padding-left: 0;
        }

        :global(.carousel-indicators button) {
          width: 200px;
          height: 12px;
          border-radius: 50%;
          background-color: white;
          opacity: 0.5;
          transition: opacity 0.3s ease;
          margin: 0 5px;
        }

        :global(.carousel-indicators button.active) {
          opacity: 1;
        }

        /* Smooth transitions */
        :global(.carousel-fade .carousel-item) {
          opacity: 0;
          transition-property: opacity;
          transform: none;
        }

        :global(.carousel-fade .carousel-item.active) {
          opacity: 1;
        }

        /* Animation for carousel content */
        :global(.carousel-item .carousel-content) {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: 0.3s;
        }

        :global(.carousel-item.active .carousel-content) {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      </div>
    </section>
  );
};

export default HeroCarousel;