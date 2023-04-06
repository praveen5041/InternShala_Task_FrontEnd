import React from 'react'
import {Row,Col,Button, Container} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import "../Pages/Home.css"
import mail from '../images/email.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

function Home() {
  return (
    <div className='main'>
    <Container className='home'>
      <Row>
        <Col md={6} className=" d-flex flex-direction-column align-items-center justify-content-center">
            <div>
                <h1>share the world</h1>
                <p>Connect with friends</p>
                <LinkContainer to="/chat">
                <Button variant="success">
                            Get Started <i className="fas fa-comments home-message-icon"></i>
                        </Button>
                </LinkContainer>
            </div>
        </Col>
        <Col md={6} className="home__bg"></Col>
        </Row>
        </Container>
     <div className="footer">
     <div className="social-icon">
       <a
         href="https://github.com/praveen5041"
         target="_blank"
         rel="noopener noreferrer"
       >
         <img src={github} className="icon github" alt="" />
       </a>
       <a
         href="https://www.linkedin.com/in/praveen-midathapally-3a8157226/"
         target="_blank"
         rel="noopener noreferrer"
       >
         <img src={linkedin} className="icon" alt="" />
       </a>
       
       <a
         href="mailto:midathapallypraveen123@gmail.com"
         target="_blank"
         rel="noopener noreferrer"
       >
         <img src={mail} className="icon" alt="" />
       </a>
     </div>
     <div className="personal-info">
       <p>Created with ❤️ using MERN by </p>
       <h4>
         <span className="symbol">&#60;</span>Praveen Midathapally
         <span className="symbol">/&#62;</span>
       </h4>
       <h6>Full Stack Developer</h6>
       
     </div>
     <h5 style={{ textAlign: "center" }}>
       Copyright © 2023 Praveen Midathapally. All rights reserved.
     </h5>
   </div>
  
   </div>
  )
}

export default Home