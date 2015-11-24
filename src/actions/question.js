import * as types from '../constants/ActionTypes';
import initialQuestionList from '../data/questionList';

export function answer(questionIndex, option) {
  return {
    type: types.ANSWER_QUESTION,
    answer: {
      questionIndex,
      option
    }
  }
}
