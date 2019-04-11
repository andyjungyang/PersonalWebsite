import React from 'react';
import PropTypes from 'prop-types';
import CardColumns from 'react-bootstrap/CardColumns';
import EditContactCardContainer from './EditContactCardContainer';

function EditContacts({ data }) {
  const contactItems = data.map(item => (
    <EditContactCardContainer
      {...item}
      key={item.title}
    />
  ));
  const newContactCard = (
    <EditContactCardContainer key="New" />
  );
  contactItems.push(newContactCard);
  return (
    <CardColumns className="px-3">
      {contactItems}
    </CardColumns>
  );
}

EditContacts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

EditContacts.defaultProps = {
  data: [],
};

export default EditContacts;
