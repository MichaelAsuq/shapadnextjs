import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Who.css';

const WhoAreWe = () => {
    return (
        <Container lg='true' className=" d-flex justify-content-start">
            <Row className='  mt-3' >
                <Col xs={11} sm={11} md={5} className='text-start'>
                    <div>
                        <p className='text-white ptext'>Shapad Communications Limited is an advertising and creative agency focused on helping brands not just
                            stand out, but truly connect with their
                            audience.</p>
                    </div>

                </Col>
                <Col xs={11} sm={11} md={5} className="mt-md-0 mt-sm-3">
                    <div>
                        <p className='text-white ptext '>We combine creativity and data-driven insights
                            to create campaigns that engage, inspire, and
                            deliver measurable results.</p>
                    </div>

                </Col>
                <Col xs={11} sm={11} md={5} className="mt-3">
                    <div>
                        <p className='text-white ptext'>Our goal is to
                            enhance brand visibility and foster
                            through customer engagement
                            innovative storytelling and strategic execution.</p>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}
export default WhoAreWe;