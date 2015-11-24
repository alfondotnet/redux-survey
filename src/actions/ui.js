import * as types from '../constants/ActionTypes';
import initialQuestionList from '../data/questionList';

export function changeStep(step) {
  return {
    type: types.CHANGE_STEP,
    step: step
  }
}
