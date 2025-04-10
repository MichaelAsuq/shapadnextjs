'use client'
import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WhoAreWe from '../../../components/WhoAreWe';
import Members from '../../../components/Members';
import Footer from '../../../components/Footer';
import Why from '../../../components/Why';
import { TypeAnimation } from 'react-type-animation';
import AbtStartProject from '../../../components/AbtStartProject';
import Aprocess from '../../../components/Aprocess';
import styles from '../../../components/About.module.css';
import { motion } from 'framer-motion';



const About = () => {

    return (
        <>
            <section className={`${styles.wrapper} bg-black`} >

                <Container lg='true' className='justify-content-center align-items-center'>
                    <Row className='justify-content-center align-items-center'>
                        <Col md={12}>
                            <p className={styles.aboutHeader}>
                                <TypeAnimation
                                    sequence={[
                                        'Shapad Communications – Where Creativity Meets Connection.', 1000,
                                        '', 1000,

                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </p>
                            <hr className='text-white' />
                            <motion.p
                                className={styles.aboutText}
                                initial={{ opacity: 0, y: 50 }} // Start hidden and below
                                animate={{ opacity: 1, y: 0 }} // Move up smoothly
                                transition={{ duration: 1, ease: "easeOut" }} // Animation duration
                            >
                                Shapad Communications Limited is a full-service advertising and creative agency committed to helping brands not just stand out—but truly connect with their audience on a deeper, more meaningful level. Based on the belief that authentic engagement drives lasting impact, we craft compelling strategies that blend creativity, storytelling, and data-driven insights to deliver measurable results.

                                <br />
                                <br />
                                With a passionate team of branding experts, digital marketers, content creators, and design visionaries, we work closely with each client to shape unforgettable brand experiences across every touchpoint—from traditional advertising to dynamic digital campaigns.
                                <br />
                                <br />
                                At Shapad Communications, we don’t just create ads. We build emotional bridges between brands and their audiences, transforming ideas into impactful narratives that resonate, inspire, and move people to action.
                                <br />
                                <br />
                                Whether you're a startup aiming to break into the market or an established brand looking to refresh your identity, we’re here to ensure your story is told the right way—boldly, creatively, and with purpose.

                            </motion.p>
                        </Col>
                    </Row>

                </Container>
            </section>
            <Members />
            <Why />
            <Aprocess />

            <AbtStartProject />


        </>
    )
}
export default About;
