'use client'
import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AbtStartProject from '../../../components/AbtStartProject';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import { ugo1 } from '../../../public/Images/ugo1.jpg';
import styles from '../../../components/nolly.module.css';

const ElevenSixteen = () => {
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
                        <h1 className={`${styles.header} mb-4`}>Elevensixteen by Ugo Mozie: High-End Fashion Branding by Shapad Communications  </h1>
                        <p className={styles.para}>At Shapad Communications, we take pride in crafting compelling brand narratives through high-quality visual storytelling. We had the honor of executing full-scale branding content production for Elevensixteen, a distinguished luxury fashion brand owned by international fashion icon Ugo Mozie.  </p>
                    </Col>


                    <Col md={11} >
                        <div>
                            <video ref={videoRef} autoPlay muted loop playsInline onEnded={handleVideoEnd} className='rounded-3' style={{ width: '100%', height: '100%' }}>
                                <source src='/Images/elevensixteen.mp4' type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </Col>

                    <Row className='py-3 g-3'>
                        <Col md={6}>
                            <img src='/Images/ugo1.webp' alt='ugo1' loading="eager" className='img-fluid rounded-2' />
                        </Col>

                        <Col md={6}>
                            <img src='/Images/ugo3.webp' alt='ugo1' loading="eager" className='img-fluid rounded-2' />
                        </Col>

                        <Col md={6}>
                            <img src='https://res.cloudinary.com/ddabcld2j/image/upload/v1740393496/ugo4_u3wasj.webp' alt='ugo1' loading="eager" className='img-fluid rounded-2' />
                        </Col>


                    </Row>
                    <Row className='my-4'>
                        <Col xs={10} sm={10} md={6}>
                            <p className={`${styles.para} my-5 `}>
                                From concept to completion, our team handled every aspect of the production—spanning photography, videography, and creative direction. Every shot, every frame, and every detail was meticulously curated to embody the essence of Elevensixteen: bold, timeless, and effortlessly stylish.

                                With our expertise in visual storytelling, we delivered striking imagery and engaging content that authentically represents Elevensixteen’s unique identity. This project stands as a testament to our commitment to elevating brands through innovative and high-impact content creation.
                                <br />
                                <br />
                                Stay tuned for more groundbreaking projects as we continue shaping brand identities with authenticity and excellence.
                            </p>
                        </Col>

                        <Col md={6}>
                            <img src='/Images/ugo2.jpg' alt='ugo1' loading="eager" className='img-fluid rounded-2' />
                        </Col>
                    </Row>

                </Container>
                <AbtStartProject />
                <Footer />
            </section >
        </>
    )
}

export default ElevenSixteen;