import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import QuestionList from './components/QuestionList';
import Results from './components/Results';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={QuestionList} />
    <Route path="results" component={Results} />
  </Route>
);
