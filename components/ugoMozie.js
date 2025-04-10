import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AbtStartProject from './AbtStartProject';
import Footer from './Footer';
import Video1 from '../assets/elevensixteen.mp4'
import './Nolly.css';

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
                        <h1 className='mb-4'>Elevensixteen by Ugo Mozie: High-End Fashion Branding by Shapad Communications  </h1>
                        <p className=''>At Shapad Communications, we take pride in crafting compelling brand narratives through high-quality visual storytelling. We had the honor of executing full-scale branding content production for Elevensixteen, a distinguished luxury fashion brand owned by international fashion icon Ugo Mozie.  </p>
                    </Col>


                    <Col md={10} >
                        <div>
                            <video ref={videoRef} autoPlay muted loop playsInline onEnded={handleVideoEnd} className='rounded-3' style={{ width: '100%', height: 'auto' }}>
                                <source src={Video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </Col>

                </Container>
                <AbtStartProject />
                <Footer />
            </section>
        </>
    )
}

export default ElevenSixteen;