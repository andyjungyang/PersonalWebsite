import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactCard from './ContactCard';

function Contact() {
  return (
    <Container className="px-3">
      <Row>
        <Col>
          <ContactCard
            title="Phone"
            logo="fas fa-phone"
            color="info"
          />
        </Col>
        <Col>
          <ContactCard
            title="Email"
            logo="far fa-envelope"
          />
        </Col>
        <Col>
          <ContactCard
            title="LinkedIn"
            logo="fab fa-linkedin"
            color="primary"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
