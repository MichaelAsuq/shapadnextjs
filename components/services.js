import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import styles from './services.module.css'
import { motion } from 'framer-motion';
import CampaignIcon from '@mui/icons-material/Campaign';
import ArticleIcon from '@mui/icons-material/Article';
import BrushIcon from '@mui/icons-material/Brush';
import RouteIcon from '@mui/icons-material/Route';
import MovieIcon from '@mui/icons-material/Movie';

const Services = () => {
    const serviceData = [
        {
            img: '/Images/web-branding.png',
            icon: <BrushIcon className={styles.serviceIcon} sx={{ fontSize: 30 }} />,
            title: 'Branding',
            desc: 'Strategic branding for your business',
            alt: 'shapad-branding',
        },
        {
            img: '/Images/webcontent.png',
            icon: <ArticleIcon className={styles.serviceIcon} sx={{ fontSize: 30 }} />, // Add your icon path here
            title: 'Content Creation',
            desc: 'Engaging content that tells your unique story',
            alt: 'shapad-content',
        },
        {
            img: '/Images/web-media-strategy.png',
            icon: <RouteIcon className={styles.serviceIcon} sx={{ fontSize: 30 }} />, // Add your icon path here
            title: 'Media Strategy',
            desc: 'Targeted campaigns that maximize your reach',
            alt: 'shapad-media-strategy',
        },
        {
            img: '/Images/web-digital-marketing 1.png',
            icon: <CampaignIcon className={styles.serviceIcon} sx={{ fontSize: 30 }} />, // Add your icon path here
            title: 'Digital Marketing',
            desc: 'Comprehensive online strategies for growth',
            alt: 'shapad-digital-marketing',
        },
        {
            img: '/Images/webmedia.png',
            icon: <MovieIcon className={styles.serviceIcon} sx={{ fontSize: 30 }} />, // Add your icon path here
            title: 'Media',
            desc: 'Comprehensive online strategies for growth',
            alt: 'shapad-digital-marketing',
        },
    ];

    return (
        <>
            <section className={styles.solutionsSection}>
                <Container className={`d-flex flex-column ${styles.customHeight}`}>
                    {/* Enhanced Header Area */}
                    <div className="text-center text-md-start mb-5">
                        <h2 className={styles.services} >
                            Comprehensive Solutions for Your Business
                        </h2>
                        <Row>
                            <Col lg={7} md={8} className="mx-auto mx-md-0">
                                <p className={styles.servicesText}>
                                    Discover how our tailored services can transform your operations and drive sustainable growth.
                                    Our expert team delivers innovative solutions designed to meet your unique business challenges.
                                </p>
                            </Col>
                        </Row>
                    </div>

                    {/* Services Grid with 3D Effect */}
                    <Row className="justify-content-center w-100  gy-4 position-relative" style={{ perspective: '1000px' }}>
                        {serviceData.map((service, index) => (
                            <Col key={index} lg={3} md={6} sm={12} className="d-flex justify-content-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, z: -100 }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                        z: 0,
                                        rotateX: [5, 0],
                                        rotateY: [index % 2 === 0 ? -5 : 5, 0]
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.2,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    viewport={{ once: true }}
                                    className={styles.imgcontainer}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transformOrigin: 'center center',
                                        border: '1px solid rgba(255, 107, 0, 0.2)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Image
                                        src={service.img}
                                        alt={service.alt}
                                        width={300}
                                        height={300}
                                        priority
                                        className={styles.imgfuild}
                                    />
                                    <div className={styles.colorOverlay}></div>
                                    <div className={styles.imageText}>
                                        <div className={styles.iconContainer}>
                                            {service.icon}
                                        </div>
                                        <h4 className={styles.mainText}>{service.title}</h4>
                                        <p className={styles.hoverText}>{service.desc}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>

                    {/* Call to Action */}
                    <div className="text-center mt-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <p className="mb-4" style={{ fontSize: '16px', color: '#444444' }}>
                                Need a customized solution for your specific requirements?
                            </p>
                            <Button
                                variant="primary"
                                className="px-4 py-2 rounded-3"
                                style={{
                                    backgroundColor: 'black',
                                    border: 'none',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: 'white',
                                }}
                            >
                                Schedule a Consultation
                            </Button>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Services;