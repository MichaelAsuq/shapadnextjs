'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';
import styles from '../../../components/projectGoogleSheet.module.css'

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
        <Container>

            <Container className="text-center my-5">
                <h1 className="display-4 fw-bold">Our Projects</h1>
                <p className="lead mt-3">
                    Explore our collection of innovative projects, showcasing creativity,
                    functionality, and excellence. Click on any project to learn more!
                </p>
            </Container>

            {loading && (
                <div className="d-flex justify-content-center align-items-center min-vh-100">
                    <div className="spinner-border spinner-border-lg text-black me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mb-0  fs-3 ">Loading projects...</p>
                </div>
            )}

            {error && (
                <div className="alert alert-danger">
                    <strong>Error:</strong> {error}
                    <p>Check your browser console for more details.</p>
                </div>
            )}

            {!loading && !error && (
                <div>

                    <Row >
                        {items.map((item, index) => (
                            <Col key={index} md={4} className="mb-4">
                                <Link className='text-decoration-none text-black' href={`/projects/${generateSlug(item.product_title)}`}>
                                    <div className={styles.projectContainer}>
                                        {item.main_image && (
                                            <Image
                                                src={item.main_image}
                                                alt="Project Image"
                                                width={450}
                                                height={450}
                                                className={styles.projectImg}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        )}
                                        <div className="mt-5">
                                            <h3 className="card-title">{item.product_title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}

        </Container>
    );
};

export default GoogleSheetsItems;