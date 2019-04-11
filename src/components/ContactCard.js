import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import '../css/ContactCard.css';

function ContactCard({
  title, content, color, logo, isLink, canEdit, handleEdit,
}) {
  let contentLink;
  if (isLink) {
    contentLink = (
      <Button target="_blank" variant={color} href={`//${content}`}>
        {content}
      </Button>
    );
  } else {
    contentLink = content;
  }
  return (
    <Card bg={color} text="white" className="mt-3">
      <Card.Header className="d-flex justify-content-between">
        <div>
          {`${title} `}
          <i className={`${logo}`} />
        </div>
        <div>
          {canEdit && (
            <i
              className="fas fa-edit"
              onClick={handleEdit}
              onKeyPress={handleEdit}
              role="link"
              tabIndex="0"
            />
          )}
          <CopyToClipboard text={content}>
            <i className="fas fa-copy" />
          </CopyToClipboard>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{contentLink}</Card.Text>
      </Card.Body>
    </Card>
  );
}

ContactCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
  logo: PropTypes.string,
  isLink: PropTypes.bool,
  canEdit: PropTypes.bool,
  handleEdit: PropTypes.func.isRequired,
};

ContactCard.defaultProps = {
  title: 'New',
  content: '',
  color: 'secondary',
  logo: '',
  isLink: false,
  canEdit: false,
};

export default ContactCard;
