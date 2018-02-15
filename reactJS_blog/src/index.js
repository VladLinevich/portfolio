import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import data from './data';



import Page from './components/Page';


ReactDOM.render(
    <Page  data={data} />, 
  document.getElementById('root'));