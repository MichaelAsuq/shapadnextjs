import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { motion } from 'framer-motion';
import './Why.css';
const Why = () => {
    const Services = [
        {
            main: 'Branding',
            sub1: 'Brand Strategy',
            sub2: 'Logo & Visual Identity Design',
            sub3: 'Brand Guidelines'
        },

        {
            main: 'Digital Marketing',
            sub1: 'Search Engine Optimization (SEO)',
            sub2: 'Social Media Marketing',
            sub3: 'Email Marketing'
        },

        {
            main: 'Content Creation',
            sub1: 'Copywriting',
            sub2: 'Graphic Design',
            sub3: 'Video Production',
            sub4: 'Photography'
        },

        {
            main: 'Media Strategy',
            sub1: 'Strategy Development',
            sub2: 'Channel Selection',
            sub3: 'Negotiation & Buying',
            sub4: 'Campaign Management'
        },

    ]
    return (
        <section className="bg-black wrapper">


            <Container lg="true" className="d-flex justify-content-start align-items-start">
                <Row
                    className="text-start text-md-start justify-content-start justify-content-md-start mb-5"
                    style={{ marginTop: '3rem' }}
                >
                    <h1 className="main1 mb-4 mb-md-5 w-100">Our expertise</h1>
                    {Services.map((service, index) => (
                        <Col
                            key={index}
                            xs={12} sm={6} md={3}
                            className="text-white mb-4 d-flex flex-column align-items-start align-items-md-start"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="py-4"
                            >
                                <div>
                                    <h5 className="servicesmain text-start mb-4">{service.main}</h5>
                                    <ul className="list-unstyled text-start text-md-start mt-4">
                                        {Object.keys(service).filter(key => key.startsWith('sub')).map((subKey, subIndex) => (
                                            <li className="servicessub" key={subIndex}>{service[subKey]}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
export default Why;