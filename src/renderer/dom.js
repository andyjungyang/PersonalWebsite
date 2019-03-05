import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

import data from '../data/personal';

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root'),
);
