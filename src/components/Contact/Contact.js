import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Particle from "../Particle";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          Get In <strong className="purple">Touch</strong>
        </h1>
        
        <Row className="contact-content">
          <Col md={6} className="contact-form">
            <div className="contact-card">
              <h3 className="text-center mb-4" style={{ color: "#c770f0" }}>
                Send me a message
              </h3>
              <form>
                <div className="form-group mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea 
                    className="form-control" 
                    rows="5" 
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </Col>
          
          <Col md={6} className="contact-info">
            <div className="contact-card">
              <h3 className="text-center mb-4" style={{ color: "#c770f0" }}>
                Contact Info
              </h3>
              <div className="contact-links">
                <a href="mailto:pushtisonawala786@gmail.com" className="contact-link">
                  <FaEnvelope /> pushtisonawala786@gmail.com
                </a>
                <a href="https://github.com/pushtisonawala" target="_blank" rel="noreferrer" className="contact-link">
                  <FaGithub /> GitHub Profile
                </a>
                <a href="https://www.linkedin.com/in/pushti-sonawala-b0079b27a/" target="_blank" rel="noreferrer" className="contact-link">
                  <FaLinkedin /> LinkedIn Profile
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
