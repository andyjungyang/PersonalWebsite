import React from 'react';
import Card from 'react-bootstrap/Card';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import '../css/ContactCard.css';

function ContactCard({
  title, content, color, logo,
}) {
  return (
    <Card bg={color} text="white" className="mt-3">
      <Card.Header className="d-flex justify-content-between">
        <div>
          {`${title} `}
          <i className={`${logo}`} />
        </div>
        <div>
          <CopyToClipboard text={content}>
            <i className="fas fa-copy" />
          </CopyToClipboard>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  color: PropTypes.string,
  logo: PropTypes.string,
};

ContactCard.defaultProps = {
  content: '',
  color: 'success',
  logo: '',
};

export default ContactCard;
