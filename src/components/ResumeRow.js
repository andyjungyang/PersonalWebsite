/* eslint-disable react/no-array-index-key */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import '../css/ResumeRow.css';

function ResumeRow({
  title, date, position, body, location, image, border,
}) {
  const bodyItems = body.map((item, index) => (
    <Card.Text className="mb-1" key={`${index}`}>
      {item}
    </Card.Text>
  ));
  return (
    <Card className="mb-1" border={border}>
      <Row>
        <Col xs={5} sm={3}>
          <div className="img-square">
            <Image src={image} rounded className="img-fit" />
          </div>
        </Col>
        <Col className="pl-0">
          <Card.Body>
            <Card.Title>
              <Row className="justify-content-between">
                <Col sm="auto">
                  {title}
                </Col>
                <Col sm="auto">
                  {position}
                </Col>
              </Row>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <Row className="justify-content-between">
                <Col sm="auto">
                  {date}
                </Col>
                <Col sm="auto">
                  {location}
                </Col>
              </Row>
            </Card.Subtitle>
            {bodyItems}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

ResumeRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  position: PropTypes.string,
  body: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  image: PropTypes.string,
  border: PropTypes.string,
};

ResumeRow.defaultProps = {
  date: '',
  position: '',
  body: [],
  location: '',
  image: '',
  border: '',
};

export default ResumeRow;
