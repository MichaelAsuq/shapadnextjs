'use client'
import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image'
import AbtStartProject from '../../../components/AbtStartProject';
import Footer from '../../../components/Footer';
import styles from '../../../components/nolly.module.css';



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
                        <h1 className={`${styles.header} mb-4 `}>Breaking the Norm with Nolly Cine TV </h1>
                        <p className={styles.para}>At Shapad Communications Ltd, we were tasked with creating a groundbreaking brand identity for Nolly Cine TV, a French TV platform dedicated to delivering thrilling Nollywood content. Here's how we brought their vision to life</p>
                    </Col>

                    <Row className='d-flex justify-content-start text-white'>

                        <Col md={8}>
                            <div>
                                <img src='/Images/hero.jpg' className='img-fluid rounded-3' alt='Corporate' width={800} height={800} />
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
                                    Shattered Glass Elements, Infused with symbols like play, move up, and move down to represent dynamic, non-linear storytelling and user engagement.<br /></p>
                                <p className='my-3'>The Colour Palette,
                                    Vibrant yet bold, the colours reflect Nollywood's energy, diversity, and cultural richness while maintaining a premium, cinematic feel.</p>


                            </div>
                        </Col>

                        <Col md={8} >
                            <div>
                                <video ref={videoRef} autoPlay muted loop playsInline onEnded={handleVideoEnd} className='rounded-3' style={{ width: '100%', height: 'auto' }}>
                                    <source src='/Images/Nolly Reveal Main(1).mp4' type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <Row className='mt-3'>
                                <Col xs={6} sm={6} md={6}>
                                    <div>
                                        <img src='/Images/CUP.webp' className='img-fluid rounded-3' alt='Cup' loading="eager" width={800} height={800} />
                                    </div>
                                </Col>

                                <Col xs={6} sm={6} md={6}>
                                    <div>
                                        <img src='/Images/cap.webp' className='img-fluid rounded-3' alt='Cap' loading="eager" width={800} height={800} />
                                    </div>
                                </Col>

                            </Row>

                        </Col>
                        <Row className='mt-5'>
                            <Col md={8}>
                                <div>
                                    <img src='/Images/black.webp' className='img-fluid rounded-3' alt='black' loading="eager" width={800} height={800} />
                                </div>

                                <Row className='mt-3'>

                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src='/Images/POLO 2.webp' className='img-fluid rounded-3' alt='Cup' loading="eager" width={800} height={800} />
                                        </div>
                                    </Col>

                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src='/Images/leather logo.webp' className='img-fluid rounded-3' alt='Cup' loading="eager" width={800} height={800} />
                                        </div>

                                        <div>
                                            <img src='/Images/White Hat.webp' className='img-fluid rounded-3 mt-3' alt='Cup' loading="eager" width={800} height={800} />
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
                                    <img src='/Images/CAR MOCK.webp' alt='car' className='img-fluid' width={800} height={800} />
                                </div>

                                <Row className='mt-3'>

                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src='/Images/typo.webp' className='img-fluid rounded-3 mt-3' alt='Cup' loading="eager" width={800} height={800} />
                                        </div>

                                    </Col>

                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src='/Images/Instagram Mockup 2021.webp' className='img-fluid rounded-3 mt-3' alt='Cup' loading="eager" width={800} height={800} />
                                        </div>
                                        <div>
                                            <img src='/Images/MOCKUP EDIT 1.webp' className='img-fluid rounded-3 mt-3' alt='Cup' loading="eager" width={800} height={800} />
                                        </div>


                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col xs={12} sm={12} md={9}>
                                <div>
                                    <img src='/Images/FLASH DRIVE.webp' className='img-fluid rounded-3' alt='Cup' loading="eager" width={800} height={800} />
                                </div>
                                <Row className='mt-4'>
                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src='/Images/Billboard.webp' className='img-fluid rounded-3' alt='Cup' width={800} height={800} />
                                        </div>
                                    </Col>

                                    <Col xs={6} sm={6} md={6}>
                                        <div>
                                            <img src='/Images/letterhead-1.webp' className='img-fluid rounded-3' alt='Cup' width={800} height={800} />
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
                                    <img src='/Images/youtube banner 2.webp' className='img-fluid rounded-3' alt='Cup' width={800} height={800} />
                                </div>

                                <div className='mt-3'>
                                    <img src='/Images/usage (1).webp' className='img-fluid rounded-3' alt='Cup' width={800} height={800} />
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