import React from 'react';
import PropTypes from 'prop-types';
import CardColumns from 'react-bootstrap/CardColumns';
import ContactCard from './ContactCard';

function Contacts({ data }) {
  const contactItems = data.map(item => (
    <ContactCard
      {...item}
      key={item.title}
    />
  ));
  return (
    <CardColumns className="px-3">
      {contactItems}
    </CardColumns>
  );
}

Contacts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Contacts.defaultProps = {
  data: [],
};

export default Contacts;
