import {Map} from 'immutable';
import {combineReducers} from 'redux';
import {questionList} from './questionlist';

const rootReducer = combineReducers({
  questionList
});

export default rootReducer;
