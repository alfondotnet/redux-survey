import {Map} from 'immutable';
import {combineReducers} from 'redux';
import {initQuestionList} from './questionlist';

const rootReducer = combineReducers({
  initQuestionList
});

export default rootReducer;
