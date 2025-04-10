import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './members.module.css'
import { motion } from 'framer-motion';


const Members = () => {
    const teamMembers = [
        {
            src: ('/Images/Abdulazeez Orehware 1 (2).png'),
            name: 'Abdulazeez Orehware',
            role: 'Founder Shapad Comm',
            instagram: 'https://www.instagram.com/zeegrafix',
            linkedin: 'https://www.linkedin.com/in/abdulazeez-haruna'
        },

        {
            src: ('/Images/Rihanna Haruna.png'),
            name: 'Rihanat Haruna',
            role: 'Project Manager',
            instagram: '',
            linkedin: 'https://www.linkedin.com/in/rihanat-haruna-568987265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },

        {
            src: ('/Images/Olajide Promise 1 (2).png'),
            name: 'Olajide Promise',
            role: 'Partner, Growth',
            instagram: 'https://www.instagram.com/pro_meezz',
            linkedin: 'https://www.linkedin.com/in/olajide-promise'
        },

        {
            src: ('/Images/Mom Chai.png'),
            name: 'Môm Chia',
            role: 'Partner, Digital Marketer',
            instagram: 'https://www.instagram.com/ibn_iornum?igsh=bGt1MmF0N2Q0czB2&utm_source=qr',
            linkedin: 'https://www.linkedin.com/in/chiamomm?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },

        {
            src: ('/Images/Tomiwa Daniel.png'),
            name: 'Tomiwa Daniel',
            role: 'Partner, 3d Motion Designer',
            instagram: 'https://www.instagram.com/_tomiwadaniel?igsh=cW8waTV6bmtoaDF5&utm_source=qr',
            linkedin: 'https://www.linkedin.com/in/tomiwa-daniel-28657a19a'
        },

        {
            src: ('/Images/Vivian Ekemezie.png'),
            name: 'Vivian Ekemezie',
            role: 'Partner, Growth & Sales',
            instagram: 'https://www.instagram.com/vivian_ekemezie?igsh=MWtuZzJsczU4ODN2Mg==',
            linkedin: 'https://www.linkedin.com/in/vivian-ekemezie?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },

        {
            src: ('/Images/Mowete Emmanuel.png'),
            name: 'Mowete Emmanuel',
            role: 'Partner, Motion Designer',
            instagram: 'https://www.instagram.com/_slimdesigns?igsh=MWJ2bWlvd3IzZHJqcA==',
            linkedin: 'https://www.linkedin.com/in/isiomamowete?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },

        {
            src: ('/Images/Odunmbaku Paul 1.png'),
            name: 'Odunmbaku Paul',
            role: ' Partner, Brand designer',
            instagram: 'https://www.instagram.com/tayo.pa',
            linkedin: 'https://www.linkedin.com/in/odunmbaku-oluwatayo-97979b184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        }


    ]
    return (
        <Container style={{ marginTop: '4rem' }} >
            <h3>Meet the team who make the magic happen</h3>
            <Row className="justify-content-center align-items-center mt-3 mb-5 g-4">
                {teamMembers.map((member, index) => (
                    <Col
                        key={index}
                        xs={12} sm={6} md={3}
                        className="d-flex flex-column align-items-center text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="py-4"
                        >
                            <img
                                src={member.src}
                                alt={member.name}
                                loading="eager"
                                className="img-fluid"
                            />
                            <h5 className={`text-start ${styles.memberName}`}>{member.name}</h5>
                            <h5 className={`text-start ${styles.memberRole}`}>{member.role}</h5>
                            <div className="d-flex justify-content-start">
                                <a className='text-decoration-none text-black' href={member.instagram} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram mx-2 fs-3"></i>
                                </a>
                                <a className='text-decoration-none text-black' href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin mx-2 fs-3"></i>
                                </a>
                            </div>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default Members;