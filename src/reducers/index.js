import {Map} from 'immutable';
import {combineReducers} from 'redux';
import {steps} from './ui';
import {questionList} from './questionlist';

const rootReducer = combineReducers({
  steps,
  questionList
});

export default rootReducer;
