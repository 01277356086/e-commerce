import React from 'react'
import './App.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container, Row } from 'react-bootstrap'
import './footer.css'
import { GoArrowRight } from "react-icons/go";
import { MdOutgoingMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { IoPerson } from "react-icons/io5";
function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <GoArrowRight className='icon' />
                <Button variant="success" onClick={handleShow} className="me-2">
                    Contact Me
                </Button>
            </div>
            <Offcanvas placement={'bottom'} show={show} onHide={handleClose}  >
                <Offcanvas.Header closeButton>

                    <Offcanvas.Title>

                        All Contact

                    </Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body>

                    <footer>
                        <Container>
                            <Row>
                                <div className='col-md-3 col-sm-6'>
                                    <h2>Name   <IoPerson className='icons' /></h2>
                                    <ul>
                                        <li><a href='#'>

                                            Hassan M Amer</a></li>

                                    </ul>
                                </div>
                                <div className='col-md-3 col-sm-6'>
                                    <h2>Phone Number  <FaPhoneVolume className='icons' /></h2>
                                    <ul>
                                        <li>
                                            <a href='#'>01277356086
                                            </a></li>

                                    </ul>
                                </div>
                                <div className='col-md-3 col-sm-6'>
                                    <h2>Gmail{' '}<MdOutgoingMail className='icons' /></h2>
                                    <ul>
                                        <li> <a href={"mailto:amerh5809@gmail.com"}>
                                            <h6>   amerh5809@gmail.com
                                            </h6>
                                        </a></li>

                                    </ul>
                                </div>
                                <div className='col-md-3 col-sm-6'>
                                    <h2>WhatsApp  <SiWhatsapp className='icons' /></h2>
                                    <ul>
                                        <li> <a href="https://wa.me/+2001277356086" target="_blank" >
                                            <h6>  +201277356086
                                            </h6>
                                        </a></li>

                                    </ul>
                                </div>

                            </Row></Container></footer>




                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default Footer