import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styles from './StartProject.module.css'
import { useRouter } from 'next/navigation';
const StartProject = () => {
    const router = useRouter();

    return (
        <>
            <Container fluid className=" d-flex justify-content-center bg-black align-items-center">

                <Col xs={11} sm={11} md={11} className='text-start mb-5' >
                    <div className='text-white'>
                        <h2 className={styles.mainheader3} style={{ fontFamily: 'lato', fontWeight: '700', marginTop: '5rem' }}>Ready to work with us?</h2>
                    </div>
                    <button className={`${styles.btn1} my-4`} onClick={() => router.push('/start-a-project')}>Start a project
                        <i className="bi bi-arrow-right-short"></i>
                    </button>
                </Col>
            </Container>
        </>
    )
}
export default StartProject;