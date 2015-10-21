import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import {Map,List} from 'immutable';
import {QuestionListContainer} from './components/QuestionList';
import configureStore from './store/configureStore';

require('./style.css');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
