import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';
import '../css/ContactCard.css';

function EditContactCard({
  title, content, color, logo, isLink, handleCancel, handleSubmit,
}) {
  return (
    <Card bg="light" className="mt-3">
      <Card.Body>
        <Formik
          initialValues={{
            title, content, color, logo, isLink,
          }}
          onSubmit={async (values, actions) => {
            try {
              await handleSubmit(values);
            } catch (err) {
              actions.setSubmitting(false);
              actions.setStatus({ msg: 'Submit Failed' });
            }
          }}
          render={({ status, isSubmitting }) => (
            <Form>
              <Field
                type="text"
                className="form-group form-control"
                name="title"
                placeholder="Title"
              />
              <Field
                type="text"
                className="form-group form-control"
                name="content"
                placeholder="Content"
              />
              <Field
                type="text"
                className="form-group form-control"
                name="logo"
                placeholder="Logo"
              />
              <Field
                type="text"
                className="form-group form-control"
                name="color"
                component="select"
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="danger">Danger</option>
                <option value="warning">Warning</option>
                <option value="info">Info</option>
                <option value="dark">Dark</option>
              </Field>
              <Field name="isLink">
                {({ field, form }) => (
                  <div className="form-check form-group">
                    <input
                      type="checkbox"
                      id="isLinkCheck"
                      checked={field.value}
                      className="form-check-input"
                      onChange={() => {
                        form.setFieldValue('isLink', !field.value);
                      }}
                    />
                    <label htmlFor="isLinkCheck" className="form-check-label">
                      Link Content?
                    </label>
                  </div>
                )}
              </Field>
              {status && status.msg && <div>{status.msg}</div>}
              <div className="d-flex justify-content-between">
                <Button type="submit" disabled={isSubmitting}>Submit</Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </div>
            </Form>
          )}
        />
      </Card.Body>
    </Card>
  );
}

EditContactCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
  logo: PropTypes.string,
  isLink: PropTypes.bool,
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

EditContactCard.defaultProps = {
  title: '',
  content: '',
  color: 'secondary',
  logo: '',
  isLink: false,
};

export default EditContactCard;
