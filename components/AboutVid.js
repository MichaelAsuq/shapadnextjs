import React, { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styles from './Vid.module.css';
import { useRouter } from 'next/navigation';

const AboutVid = () => {
    const router = useRouter();
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Replay the video
        }
    };

    return (
        <>
            <Container lg className=" d-flex justify-content-start align-items-start">
                <Col xs={11} sm={11} md={7} className='text-start mb-5' >
                    <h1 className="text-white my-4" style={{ fontFamily: 'lato', fontSize: '24px', fontWeight: '700' }}>Explore our work</h1>
                    <div className={styles.vidcontainer}>
                        <video ref={videoRef} autoPlay muted loop playsInline onEnded={handleVideoEnd} className='rounded' style={{ width: '100%', height: 'auto' }}>
                            <source src='/Images/nolly.mp4' type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className={styles.overlay}>
                            <h2 className={styles.overlayt}>Nolly Cine Tv</h2>
                            <button className={styles.btn3} onClick={() => router.push('/nolly-cine-tv')}>Read case study</button>
                        </div>
                    </div>

                </Col>


            </Container>

            <Container lg='true' className=" d-flex justify-content-start align-items-start">
                <Col xs={11} sm={11} md={7} className='text-start mb-5' >
                    <div className={styles.vidcontainer}>
                        <video ref={videoRef} autoPlay muted loop playsInline onEnded={handleVideoEnd} className='rounded' style={{ width: '100%', height: 'auto' }}>
                            <source src='/Images/eleven_sixteen1.mp4' type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className={styles.overlay}>
                            <h2 className={styles.overlayt}>Elevensixteen</h2>
                            <button className={styles.btn3} onClick={() => router.push('/ugo-mozie')}>Read case study</button>
                        </div>
                    </div>

                </Col>


            </Container>
        </>
    )
}
export default AboutVid;