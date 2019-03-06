import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

function Home({
  title, body, image,
}) {
  return (
    <Container className="py-3 px-3">
      <Jumbotron>
        <Row>
          <Col>
            <h2>{title}</h2>
            <p>{body}</p>
          </Col>
          <Col xs={5} sm={3}>
            <Image src={image} roundedCircle fluid />
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

Home.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
};

Home.defaultProps = {
  title: '',
  body: '',
  image: '',
};

export default Home;
