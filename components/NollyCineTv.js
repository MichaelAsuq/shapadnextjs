import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Corporate from '../assets/hero.webp';
import Video from '../assets/Nolly Reveal Main(1).mp4'
import Cup from '../assets/CUP.webp';
import cap from '../assets/cap.webp';
import Hat from '../assets/White hat.webp';
import Polo from '../assets/POLO 2.webp';
import Leather from '../assets/leather logo.webp';
import Black from '../assets/black.webp';
import AbtStartProject from './AbtStartProject';
import Footer from './Footer';
import letterhead from '../assets/letterhead-1.webp';
import typo from '../assets/typo.webp';
import youtube from '../assets/youtube banner 2.webp';
import billboard from '../assets/Billboard.webp'
import usage from '../assets/usage (1).webp'
import mock from '../assets/MOCKUP EDIT 1.webp';
import flash from '../assets/FLASH DRIVE.webp'
import car from '../assets/CAR MOCK.webp';
import instagram from '../assets/Instagram Mockup 2021.webp'
import './Nolly.css';
import Eleven from './ugoMozie';


const Nolly = () => {
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Replay the video
        }
    };
    return (
        <>
            <section style={{ backgroundColor: '#000000' }}>
                <Container lg='true' style={{ fontFamily: 'lato' }}>
                    <Col xs={10} sm={10} md={6} className='text-white mb-5'>
                        <h1 className='mb-4'>Breaking the Norm with Nolly Cine TV </h1>
                        <p className=''>At Shapad Communications Ltd, we were tasked with creating a groundbreaking brand identity for Nolly Cine TV, a French TV platform dedicated to delivering thrilling Nollywood content. Here's how we brought their vision to life</p>
                    </Col>

                    <Row className='d-flex justify-content-start text-white'>

                        <Col md={8}>
                            <div>
                                <img src={Corporate} className='img-fluid rounded-3' alt='Corporate' />
                            </div>
                        </Col>
                        <Col xs={10} sm={10} md={4}>
                            <div className='text-start'>
                                <p className='pt-3'>We envisioned Nolly Cine TV as more than just a platform—it’s a movement breaking away from the ordinary. To capture this, we introduced the shattering glass motif, symbolizing their bold and disruptive approach to storytelling</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='d-flex justify-content-start text-white my-4'>
                        <Col xs={10} sm={10} md={4}>
                            <div>
                                <p>
                                    The Logo Design
                                    Designed as a
                                    pulse, representing suspense and the thrill of Nollywood entertainment.
                                    Shattered Glass Elements, Infused with symbols like play, move up, and move down to represent dynamic, non-linear storytelling and user engagement.<br />
                                    <p className='my-3'>The Colour Palette,
                                        Vibrant yet bold, the colours reflect Nollywood's energy, diversity, and cultural richness while maintaining a premium, cinematic feel.</p>

                                </p>
                            </div>
                        </Col>

                        <Col md={8} >
                            <div>
                                <video ref={videoRef} autoPlay muted loop playsInline onEnded={handleVideoEnd} className='rounded-3' style={{ width: '100%', height: 'auto' }}>
                                    <source src={Video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <Row className='mt-3'>
                                <Col xs={6} sm={6} md={6}>
                                    <div>
                                        <img src={Cup} className='img-fluid rounded-3' alt='Cup' loading="eager" />
                                    </div>
                                </Col>

                                <Col xs={6} sm={6} md={6}>
                                    <div>
                                        <img src={cap} className='img-fluid rounded-3' alt='Cup' loading="eager" />
                                    </div>
                                </Col>

                            </Row>

                        </Col>
                        <Row className='mt-5'>
                            <Col md={8}>
                                <div>
                                    <img src={Black} className='img-fluid rounded-3' alt='black' loading="eager" />
                                </div>

                                <Row className='mt-3'>

                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src={Polo} className='img-fluid rounded-3' alt='Cup' loading="eager" />
                                        </div>
                                    </Col>

                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src={Leather} className='img-fluid rounded-3' alt='Cup' loading="eager" />
                                        </div>

                                        <div>
                                            <img src={Hat} className='img-fluid rounded-3 mt-3' alt='Cup' loading="eager" />
                                        </div>

                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={10} sm={10} md={4}>
                                <div className='result' >

                                    <p className='my-3'>

                                        A brand identity that resonated with Nolly Cine TV’s mission to disrupt the norm and captivate audiences globally. From concept to final execution, the design delivered excitement, suspense, and cultural pride, positioning the platform as a standout in the industry.  </p>
                                </div>
                            </Col>

                        </Row>
                        <Row className='mt-5'>
                            <Col xs={12} sm={12} md={9}>
                                <div>
                                    <img src={car} alt='car' className='img-fluid' />
                                </div>

                                <Row className='mt-3'>

                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src={typo} className='img-fluid rounded-3 mt-3' alt='Cup' loading="eager" />
                                        </div>

                                    </Col>

                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src={instagram} className='img-fluid rounded-3' alt='Cup' loading="eager" />
                                        </div>
                                        <div>
                                            <img src={mock} className='img-fluid rounded-3 mt-3' alt='Cup' loading="eager" />
                                        </div>


                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col xs={12} sm={12} md={9}>
                                <div>
                                    <img src={flash} className='img-fluid rounded-3' alt='Cup' />
                                </div>
                                <Row className='mt-4'>
                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src={billboard} className='img-fluid rounded-3' alt='Cup' />
                                        </div>
                                    </Col>

                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src={letterhead} className='img-fluid rounded-3' alt='Cup' />
                                        </div>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>

                        <Row className='mt-5'>
                            <Col xs={10} sm={10} md={4}>
                                <div className='mb-3'>
                                    <p>
                                        This project reinforced Shapad Communications Ltd’s commitment to redefining how brands communicate their essence through innovative storytelling.

                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={8}>
                                <div>
                                    <img src={youtube} className='img-fluid rounded-3' alt='Cup' />
                                </div>

                                <div className='mt-3'>
                                    <img src={usage} className='img-fluid rounded-3' alt='Cup' />
                                </div>
                            </Col>
                        </Row>

                    </Row>
                </Container>
                <AbtStartProject />
                <Footer />
            </section>

        </>
    )

}
export default Nolly;