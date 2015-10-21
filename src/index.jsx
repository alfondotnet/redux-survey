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

// Move this to onComponentDidMount of App
store.dispatch({
  type: 'SET_STATE',
  state: {
      questionList: [
        {
          questionText: 'Question 1',
          answer: null,
          possibleAnswers: [1,2,3],
          getScore: function(score) { return score; }
        },
        {
          questionText: 'Question 2',
          answer: null,
          possibleAnswers: [1,2,3],
          getScore: function(score) { return score + 1; }
        }
      ]
    }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
