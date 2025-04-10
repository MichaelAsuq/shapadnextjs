import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-black text-white d-none d-md-block py-5">
                <Container>
                    <Row className="justify-content-between align-items-start gx-5">
                        <Col lg={3} md={4} className="text-start mb-4 mb-lg-0">
                            <div>
                                <h5 className="mb-3 text-uppercase fw-bold fs-5 ">Headquarters</h5>
                                <p className="mb-0 text-white lh-lg">
                                    35, Evangelist Nurudeen Street
                                    <br />
                                    Abijo, Ibeju Lekki, Lagos
                                </p>
                            </div>
                        </Col>

                        <Col lg={3} md={4} className="text-start mb-4 mb-lg-0">
                            <div>
                                <h5 className="mb-3 text-uppercase fw-bold fs-5">Contact</h5>
                                <div className="text-white lh-lg">
                                    <a
                                        href="mailto:info@shapad.com.ng"
                                        className="text-white text-decoration-none d-block mb-2 hover-white"
                                    >
                                        info@shapad.com.ng
                                    </a>
                                    <span>+2348163781757</span>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} md={4} className="text-lg-start text-md-end mb-4 mb-lg-0">
                            <div>
                                <h5 className="mb-3 text-uppercase fw-bold fs-5">Follow Us</h5>
                                <div className="d-flex justify-content-md-end justify-content-lg-start">
                                    <a
                                        href="https://www.linkedin.com/company/shapad/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white me-4 hover-white"
                                    >
                                        <i className="bi bi-linkedin" style={{ fontSize: "22px" }}></i>
                                    </a>
                                    <a
                                        href="http://Instagram.com/theshapad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover-white"
                                    >
                                        <i className="bi bi-instagram" style={{ fontSize: "22px" }}></i>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row >

                    <hr className="mt-5 mb-4 border-white opacity-25" />

                    <Row>
                        <Col className="text-center">
                            <p className="mb-0 small text-white">
                                ©{currentYear} SHAPAD. ALL RIGHTS RESERVED
                            </p>
                        </Col>
                    </Row>
                </Container >
            </footer >


            {/* Mobile Footer */}
            < footer className="bg-black text-white d-block d-md-none py-4" >
                <Container>
                    <Row className="mb-3">
                        <Col xs={12}>
                            <div className="mb-3">
                                <h5 className="mb-2 text-uppercase fw-bold">Headquarters</h5>
                                <p className="mb-0">
                                    35, Evangelist Nurudeen Street
                                    <br />
                                    Abijo, Ibeju Lekki, Lagos
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={12}>
                            <div className="mb-3">
                                <h5 className="mb-2 text-uppercase fw-bold">Contact</h5>
                                <div className="">
                                    <a
                                        href="mailto:info@shapad.com.ng"
                                        className="text-white text-decoration-none d-block mb-1"
                                    >
                                        info@shapad.com.ng
                                    </a>
                                    <span>+2348163781757</span>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={12}>
                            <div className="mb-3">
                                <h5 className="mb-2 text-uppercase fw-bold">Follow Us</h5>
                                <div className="d-flex">
                                    <a
                                        href="https://www.linkedin.com/company/shapad/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white me-3"
                                    >
                                        <i className="bi bi-linkedin" style={{ fontSize: "24px" }}></i>
                                    </a>
                                    <a
                                        href="http://Instagram.com/theshapad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white"
                                    >
                                        <i className="bi bi-instagram" style={{ fontSize: "24px" }}></i>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="text-center">
                            <p className="mb-0 small">
                                ©{currentYear} SHAPAD. ALL RIGHTS RESERVED
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer >
        </>
    );
};

export default Footer;
