'use client'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';


const StartAproject = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const accessKey = "1ced3ea6-6168-481f-8ab4-8e5b31882834";

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: 'Shapad',
            subject: 'New Contact Message from your Website',
        },
        onSuccess: (msg) => {
            console.log('Success:', msg);
            alert('Message sent successfully!');
            reset();
        },
        onError: (msg) => {
            console.error('Error:', msg);
            alert('Failed to send message.');
        },
    });

    return (
        <>
            <Container fluid className="bg-white min-vh-100 d-flex align-items-center py-5">
                <Container>
                    <Row className="shadow-lg rounded overflow-hidden" style={{ marginTop: '5rem' }}>
                        {/* Contact Information Column */}
                        <Col
                            md={5}
                            className="bg-black text-white p-5 d-flex flex-column justify-content-center"
                        >
                            <h1 className="display-5 mb-4 fw-bold" style={{ color: "white" }}>Contact Shapad</h1>

                            <div className="mb-4">
                                <h5 className="mb-3">Contact Information</h5>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-envelope me-3 fs-4" style={{ color: "white" }}></i>
                                    <div>
                                        <small className="text-white-50">Email</small>
                                        <p className="mb-0">hello@theshapad.com</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-phone me-3 fs-4" style={{ color: "white" }}></i>
                                    <div>
                                        <small className="text-white-50">Phone</small>
                                        <p className="mb-0">+2348163781757</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h5 className="mb-3">Connect With Us</h5>
                                <div className="d-flex">
                                    <a
                                        href="https://www.linkedin.com/company/shapad/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white me-3 fs-4"
                                    >
                                        <i className="bi bi-linkedin" style={{ color: "white" }}></i>
                                    </a>
                                    <a
                                        href="http://Instagram.com/theshapad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white fs-4"
                                    >
                                        <i className="bi bi-instagram" style={{ color: "white" }}></i>
                                    </a>
                                </div>
                            </div>
                        </Col>

                        {/* Contact Form Column */}
                        <Col md={7} className="p-5">
                            <h2 className="mb-4 text-center" style={{ color: "black" }}>Send us a Message</h2>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold text-black">Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=""
                                                {...register('name', {
                                                    required: 'Name is required',
                                                    minLength: {
                                                        value: 2,
                                                        message: 'Name must be at least 2 characters'
                                                    }
                                                })}
                                                className={`form-control form-control-lg bg-white text-black border-1 ${errors.name ? 'is-invalid' : ''}`}
                                            />
                                            {errors.name && (
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.name.message}
                                                </Form.Control.Feedback>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold text-black">Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder=""
                                                {...register('email', {
                                                    required: '',
                                                    pattern: {
                                                        value: /\S+@\S+\.\S+/,
                                                        message: 'Invalid email address'
                                                    }
                                                })}
                                                className={`form-control form-control-lg bg-white text-black border-1 ${errors.name ? 'is-invalid' : ''}`}
                                            />
                                            {errors.email && (
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email.message}
                                                </Form.Control.Feedback>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bold text-black">Phone Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder=""
                                        {...register('phone', {
                                            required: 'Phone number is required',
                                            pattern: {
                                                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                                                message: 'Invalid phone number'
                                            }
                                        })}
                                        className={`form-control form-control-lg bg-white text-black border-1 ${errors.name ? 'is-invalid' : ''}`}
                                    />
                                    {errors.phone && (
                                        <Form.Control.Feedback type="invalid">
                                            {errors.phone.message}
                                        </Form.Control.Feedback>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-bold text-black">Project Details</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder=""
                                        {...register('message', {
                                            required: 'Project details are required',
                                            minLength: {
                                                value: 10,
                                                message: 'Please provide more details'
                                            }
                                        })}
                                        className={`form-control form-control-lg bg-white text-black border-1 ${errors.name ? 'is-invalid' : ''}`}
                                    />
                                    {errors.message && (
                                        <Form.Control.Feedback type="invalid">
                                            {errors.message.message}
                                        </Form.Control.Feedback>
                                    )}
                                </Form.Group>

                                <Button
                                    variant="warning"
                                    type="submit"
                                    className="w-100 py-4 fw-bold text-white"
                                    style={{ backgroundColor: "black", border: "none" }}
                                >
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>


        </>
    )
}

export default StartAproject;