import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';
import { steps } from './ui';
import { questionList } from './questionlist';

const rootReducer = combineReducers({
  steps,
  questionList,
  router
});

export default rootReducer;
