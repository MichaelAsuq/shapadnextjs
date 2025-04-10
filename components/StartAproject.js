import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

import styles from './StartAprocess.module.css';
import Footer from './Footer';

const StartAproject = () => {
    const { register, handleSubmit, reset } = useForm();
    const accessKey = "1ced3ea6-6168-481f-8ab4-8e5b31882834"; // Replace with your actual access key

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: 'Shapad', // Customize as needed
            subject: 'New Contact Message from your Website',
        },
        onSuccess: (msg) => {
            console.log('Success:', msg);
            alert('Message sent successfully!');
            reset(); // Reset the form after successful submission
        },
        onError: (msg) => {
            console.error('Error:', msg);
            alert('Failed to send message.');
        },
    });
    return (
        <>
            <section style={{ backgroundColor: '#000000' }}>
                <Container lg='true' className='mb-5'>
                    <Row className=' d-flex justify-content-center align-items-center py-5' >
                        <Col xs={11} sm={11} md={4} className='text-start' style={{ fontFamily: 'lato' }}>
                            <div className='text-white'>
                                <div className='mb-4'>
                                    <h1 className={styles.contactheader}>CONTACT<br /> SHAPAD</h1>
                                </div>
                                <div className='mb-4'>
                                    <p className='fs-3 fw-bold'>Email: <br />
                                        <a className=' text-decoration-none text-white' href="mailto:example@example.com?subject=Hello&body=I wanted to reach out to you about..." ><span className='contact-t'>info@shapad.com.ng</span></a>
                                    </p>
                                </div>

                                <div className='mb-4'>
                                    <p className='fs-3 fw-bold'>Contact: <br />
                                        <span className='contact-t'>+2348163781757</span>
                                    </p>
                                </div>

                                <div className='mb-4' >
                                    <p className='fs-3 fw-bold '>Socials: <br />
                                        <span className='text-white text-start'>
                                            <a className='text-decoration-none text-white' href='https://www.linkedin.com/company/shapad/' target="_blank" rel="noopener noreferrer"> <i className="bi bi-linkedin fs-2 ms-auto" /></a>
                                            <a className='text-decoration-none text-white' href='http://Instagram.com/theshapad' target="_blank" rel="noopener noreferrer"> <i className="bi bi-instagram fs-2" /></a>

                                        </span>
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col xs={11} sm={11} md={6} className={styles.Form} style={{ fontFamily: 'lato' }}  >
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-4" controlId="formName">
                                    <Form.Label className='text-white fs-4 fw-bold'>Name</Form.Label>
                                    <Form.Control size="lg" type="text" {...register('name', { required: true })} />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formEmail">
                                    <Form.Label className='text-white fs-4 fw-bold'>Email</Form.Label>
                                    <Form.Control size="lg" type="email" {...register('email', { required: true })} />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formPhone">
                                    <Form.Label className='text-white fs-4 fw-bold'>Number</Form.Label>
                                    <Form.Control size="lg" type="number" {...register('phone', { required: true })} />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formDescription">
                                    <Form.Label className='text-white fs-4 fw-bold'>Brief</Form.Label>
                                    <Form.Control as="textarea" rows={5} {...register('message', { required: true })} />
                                </Form.Group>

                                <button type='submit' className={styles.btn2}>Submit</button>
                            </Form>

                        </Col>
                    </Row>
                </Container >
                <Footer />
            </section>
        </>
    )
}
export default StartAproject;