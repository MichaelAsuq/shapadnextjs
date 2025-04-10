import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';
import styles from './projectGoogleSheet.module.css'
import { motion } from 'framer-motion';

// Utility function to generate SEO-friendly slugs
const generateSlug = (title) => {

    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .trim();
};

const GoogleSheetsItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Google API configuration
    const API_KEY = 'AIzaSyDWi6NgZDkWK2FwE6GTSS6e3kW7GkTcwlI'; // For public sheets only

    const SPREADSHEET_ID = '1R-v9kSqQ-YO_wuOSOzjMr8mfgXsxFI_UaDGOZW-hkwQ';
    const RANGE = 'shapad!A1:Z1000';



    // Initialize Google API client
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);

            // Direct API call without gapi
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
            const response = await axios.get(url);

            console.log('Data received:', response.data);
            const rows = response.data.values || [];

            if (rows.length > 0) {
                const headers = rows[0];
                const itemsData = [];

                for (let i = 1; i < rows.length; i++) {
                    const item = {};
                    rows[i].forEach((value, index) => {
                        item[headers[index]] = value;
                    });
                    itemsData.push(item);
                }

                setItems(itemsData);
            }

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data: ' + (error.response?.data?.error?.message || error.message || 'Unknown error'));
            setLoading(false);
        }
    };

    return (
        <Container className={styles.wrapper}>
            <div>
                {/* Main Section Header */}
                <Row className="justify-content-start text-start my-5">
                    <Col md={8}>
                        <h2 className={styles.projectHeader}>
                            At Shapad, we bring visions to life with strategic brand management,
                            innovative marketing, and impactful storytelling.
                        </h2>
                    </Col>
                </Row>

                {/* Loading and Error Messages */}
                {loading && (
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                            <div className="spinner-border text-primary me-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mb-0">Loading latest data...</p>
                        </Col>
                    </Row>
                )}

                {error && (
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <div className="alert alert-danger text-center">
                                <strong>Error:</strong> {error}
                                <p>Check your browser console for more details.</p>
                            </div>
                        </Col>
                    </Row>
                )}

                {/* Portfolio Showcase */}
                {!loading && !error && (
                    <div>
                        {/* Subheader */}
                        <Row className="mb-4">
                            <Col md={9}>
                                <h4 className={styles.projects}>
                                    Explore our portfolio of successful projects that showcase our expertise
                                    in transforming businesses into powerful, recognizable brands.
                                </h4>
                            </Col>
                            <Col md={3} className="text-end">
                                <Link href="/portfolio" className="text-decoration-none">
                                    <motion.button
                                        className={styles.learnMore}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View More <i className={`bi bi-arrow-right ps-2 ${styles.arrowIcon}`}></i>
                                    </motion.button>
                                </Link>
                            </Col>
                        </Row>

                        {/* Project List */}
                        <Row>
                            {items.slice(-2).map((item, index) => (
                                <Col key={index} md={6} className="mb-4">
                                    <motion.div
                                        initial={{ opacity: 0, x: index === 0 ? -80 : 80 }} // Left & Right animation
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ type: "spring", stiffness: 35, damping: 18 }}
                                        viewport={{ once: true, margin: "-10%" }}
                                    >
                                        <Link href={`/projects/${generateSlug(item.product_title)}`} className="text-decoration-none text-black">
                                            <div className={styles.projectContainer}>
                                                {item.main_image && (
                                                    <Image
                                                        src={item.main_image}
                                                        alt="Project Image"
                                                        width={450}
                                                        height={450}
                                                        className={styles.projectImg}
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                )}
                                                <div className="mt-4 text-start">
                                                    <h3 className={styles.projectTitle}>{item.product_title}</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}
            </div>
        </Container>

    );
};

export default GoogleSheetsItems;