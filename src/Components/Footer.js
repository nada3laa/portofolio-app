import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Footer = () => {
    return (
        <div>
            <Container fluid className='text-center text-white footer'>
                <Row>
                    <Col>
                        <hr />
                        <h5 className='pt-5'> &copy; 2024 by Nada Alaa <i className='fas fa-heart text-danger'></i> </h5>
                        <div className='icons pb-5'>
                            <a href='https://www.facebook.com/noor.elbaian.7?mibextid=ZbWKwL' target='_blank' rel="noreferrer"><i className='fab fa-facebook m-3'></i></a>
                            <a href='https://github.com/nada3laa' rel="noreferrer" target='_blank'><i className='fab fa-github m-3'></i></a>
                            <a href='https://www.linkedin.com/in/nada-alaa-34676a204/' target='_blank' rel="noreferrer"><i className='fab fa-linkedin m-3'></i></a>
                            <a href='https://wa.me/+201021806391' target='_blank' rel="noreferrer"><i className='fab fa-whatsapp-square whats m-3'></i></a>
                            <a href='mailto:n192004a@gmail.com' rel="noreferrer"><i className='fas fa-envelope m-3'></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer