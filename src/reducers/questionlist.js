import * as types from '../constants/ActionTypes';
import {Map, fromJS} from 'immutable';
import initialQuestionList from '../fixtures/sample';

// this reducer sets the initial state
export function initQuestionList(state, action) {

  if(typeof state === 'undefined') {
    return Map({questionList: fromJS(initialQuestionList)});
  }
  return state;
}
