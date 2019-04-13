import React from 'react';
import axios from 'axios';
import EditContactCard from './EditContactCard';
import ContactCard from './ContactCard';
import '../css/ContactCard.css';

class EditContactCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      editing: false,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEdit() {
    this.setState({ editing: true });
  }

  handleCancel() {
    this.setState({ editing: false });
  }

  async handleSubmit(values) {
    await axios.post('/contact', values);
    this.setState({ editing: false, ...values });
  }

  render() {
    const { editing } = this.state;
    if (editing) {
      return (
        <EditContactCard
          {...this.state}
          handleCancel={this.handleCancel}
          handleSubmit={this.handleSubmit}
        />
      );
    }
    return (
      <ContactCard
        {...this.state}
        canEdit
        handleEdit={this.handleEdit}
      />
    );
  }
}

export default EditContactCardContainer;
