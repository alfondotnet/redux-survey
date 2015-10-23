import * as types from '../constants/ActionTypes';
import initialQuestionList from '../fixtures/sample';
import {fromJS} from 'immutable';

export function answer(questionIndex, option) {

  return {
    type: types.ANSWER_QUESTION,
    answer: {
      questionIndex,
      option
    }
  }
}
