/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import {Map,List} from 'immutable';
import reducer from './reducer';
import QuestionList from './components/QuestionList';

require('./style.css');

const store = createStore(reducer);

// Later this will come from a json and will use fromJS,
// maybe even using fromJS in the reducer, though this is still not clear.

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

const routes = <Route component={App}>
  <Route path="/" component={QuestionList} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
