import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WhoAreWe from './WhoAreWe';
import Members from './Members';
import Footer from './Footer';
import Why from './Why';
import AboutVid from './AboutVid';
import StartProject from './StartProject';
import AbtStartProject from './AbtStartProject';
import Aprocess from './Aprocess';
import './About.css'
const About = () => {
  const [moveHeader, setMoveHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setMoveHeader(true); // Move header to the right
      } else {
        setMoveHeader(false); // Reset header to its original position
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section style={{ backgroundColor: '#000000' }}>
        <Container lg='true' className=" justify-content-center align-items-center">

          <Col xs={11} sm={11} md={11} className={`text-start py-3 main-header ${moveHeader ? 'move-right' : ''}`} >
            <div className='text-white'>
              <h1 className='main-header' >We make your brand story timeless</h1>
            </div>
          </Col>
        </Container>
        <WhoAreWe />
        <Members />
        <Why />
        <Aprocess />
        <AboutVid />
        <AbtStartProject />
        <Footer />
      </section>
    </>
  )
}
export default About;
