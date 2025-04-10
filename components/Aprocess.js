import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Aprocess = () => {
    return (
        <section >
            <Container lg='true' className=" d-flex vh-100 justify-content-start">
                <Row className=' my-4 ' >
                    <h1 className=" main1 text-black mb-5" > Let our hot ideas work for you </h1>
                    <Col xs={11} sm={11} md={6} className='text-start' style={{ fontFamily: 'lato' }}>
                        <div>
                            <p className='text-black ptext'>We offer tailored strategies that enhance brand visibility, deepen customer engagement, and drive business growth.</p>
                        </div>

                    </Col>
                    <Col xs={11} sm={11} md={5} style={{ fontFamily: 'lato' }}>
                        <div>
                            <p className='text-black ptext'>With these strategies, SHAPAD ensures increased visibility, lead generation, and sustained growth for your business.</p>
                        </div>

                    </Col>

                </Row>
            </Container>
        </section>
    )
}
export default Aprocess;