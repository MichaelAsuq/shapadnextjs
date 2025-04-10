import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Vid from './Video';
import Why from './Why';
import './Home.css'
import StartProject from './StartProject';
import Footer from './Footer'
const Home = () => {
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
                <Container fluid className=" d-flex justify-content-center align-items-center">

                    <Col xs={11} sm={11} md={11}  className={`text-start mt-3 main-header ${moveHeader ? 'move-right' : ''}`} >
                        <div className='text-white'>

                            <h1 className='main-header1' > Turning<br />Businesses into Brands That Last.</h1>
                        </div>
                    </Col>
                </Container>
                <Vid />
                <StartProject />
                <Footer />
            </section>
        </>

    )
}
export default Home;