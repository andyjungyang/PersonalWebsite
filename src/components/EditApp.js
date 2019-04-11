import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Home from './Home';
import EditContacts from './EditContacts';
import Resume from './Resume';

function EditApp({ data }) {
  return (
    <Router basename="/edit">
      <div>
        <Header />
        <Route
          exact
          path="/"
          render={() => <Home {...data.home} />}
        />
        <Route
          path="/resume"
          render={() => <Resume data={data.resume} />}
        />
        <Route
          path="/contact"
          render={() => <EditContacts data={data.contacts} />}
        />
      </div>
    </Router>
  );
}

EditApp.propTypes = {
  data: PropTypes.shape({
    resume: PropTypes.array,
  }),
};

EditApp.defaultProps = {
  data: {},
};

export default EditApp;
