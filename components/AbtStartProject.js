import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/navigation';
import styles from './StartProject.module.css'
const AbtStartProject = () => {
    const router = useRouter();

    return (
        <section className="bg-black">
            <Container lg='true' className=" d-flex justify-content-start py-5 align-items-start">

                <Col xs={11} sm={11} md={11} className='text-start mb-5' >
                    <div className='text-white'>
                        <h2 className={styles.mainheader3}>Ready to work with us?</h2>
                    </div>
                    <button className={`${styles.btn1} my-4`} onClick={() => router.push('/start-a-project')}>Start a project
                        <i className={`${styles.icon} bi bi-arrow-right-short`}></i>
                    </button>
                </Col>
            </Container>
        </section>
    )
}
export default AbtStartProject;