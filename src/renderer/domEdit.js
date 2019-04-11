import React from 'react';
import ReactDOM from 'react-dom';
import EditApp from '../components/EditApp';

ReactDOM.render(
  <EditApp data={window.initialData} />,
  document.getElementById('root'),
);
