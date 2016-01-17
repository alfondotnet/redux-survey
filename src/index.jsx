import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';

require('./style.css');

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('app')
);
