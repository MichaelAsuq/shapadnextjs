import { Container, Row, Col } from "react-bootstrap";
import styles from './homeAbout.module.css';
import Image from "next/image";
import { motion } from 'framer-motion';
const HomeAbout = () => {
    return (
        <>
            <section className="bg-black">
                <Container lg='true' className={`vh-100 d-flex  align-items-center ${styles.customHeight}`}>
                    <Row className="justify-content-between w-100">

                        <Col md={6} sm={11}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.homeAboutHeader}>Who we are</h3>
                                <p className={styles.homeAboutText}>
                                    At Shapad Communication, we don't just create ads, we craft stories that stick, blending creativity with strategy to turn bussiness into unforgettable brands. <br /> <br />
                                    Our goal is to enhance brand visibility and foster deeper customer engagement through innovative storytelling and strategic execution. <br />  <br />
                                    We are not just another agency, we're a team of bold creative thinkers, and strategy-driven storytellers. if you're ready to go beyond the ordinary and create a brand that truly matters, you're in the right place. Welcome to Shapad!
                                </p>
                                <motion.button
                                    className={styles.learnMore}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn more <i className={`bi bi-arrow-right ps-2 ${styles.arrowIcon}`}></i>
                                </motion.button>
                            </motion.div>
                        </Col>


                        <Col md={5} className="d-none d-md-block">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <Image src='/Images/homeabout.jpg' className='aboutImg' alt='shapad-homeabout' width={450} height={450} />
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default HomeAbout;