import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const About = () => {
  return (
    <div>
      <Container fluid className='about text-center' id='about'>
        <Row>
          <Col md="12">
            <h2 className='text-light fw-bold pb-4 wow bounceInDown'>about me</h2>
            <p className='text-blue fw-bold wow bounceInUp'>My name is Nada , Front-end developer <br></br>As a dedicated and skilled Front-End Developer, I specialize in creating responsive, user-friendly web applications with a focus on ReactJS. My expertise includes developing dynamic interfaces and seamless user experiences by leveraging modern technologies and best practices. I am committed to crafting high-quality, maintainable code and collaborating effectively with cross-functional teams to deliver exceptional digital products.<br />  <br /> 
              
            </p>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About