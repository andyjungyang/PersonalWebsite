import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactCard from './ContactCard';

function Contact({ data }) {
  const contactItems = data.map(item => (
    <Col key={item.title}>
      <ContactCard
        {...item}
      />
    </Col>
  ));
  return (
    <Container className="px-3">
      <Row>
        {contactItems}
      </Row>
    </Container>
  );
}

Contact.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Contact.defaultProps = {
  data: [],
};

export default Contact;
