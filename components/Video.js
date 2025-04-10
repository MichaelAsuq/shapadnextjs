import React from 'react'
import { useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from './Video.module.css';
import { useRouter } from 'next/navigation';
import Ugo from './ugoVideo';
const Vid = () => {
    const router = useRouter();

    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Replay the video
        }
    };
    return (
        <>
            <Container fluid className='d-flex justify-content-center align-items-center'>
                <Col xs={11} sm={11} md={11} className='text-center' style={{ marginTop: '3rem' }}>

                    <div className={styles.vidcontainer1} >
                        <video ref={videoRef} autoPlay muted loop playsInline onClick={() => router.push('/nolly-cine-tv')} onEnded={handleVideoEnd} className={styles.vidd} style={{ width: '100%', height: '100%', }}>
                            <source src='/Images/nolly.mp4' type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className={styles.overlay1}>
                            <h2 className={`${styles.overlaytext} text-start fw-bold mb-0 mb-sm-3 `}>Nolly Cine Tv</h2>
                            <span className={styles.overlaytext1}>Brand identity project</span>

                        </div>
                    </div>
                </Col>


            </Container>
            <Ugo />

        </>
    )
}
export default Vid;