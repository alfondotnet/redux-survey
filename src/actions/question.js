import * as types from '../constants/ActionTypes';
import questionListData from '../data/questionList';

// we return a function that computes the action based on the value of
// the getScore function
// TODO: Maybe check that the value is permitted here?
export function answer(questionIndex, option) {
  return dispatch => {

    const score = questionListData[questionIndex].getScore(option);

    dispatch({
      type: types.ANSWER_QUESTION,
      questionIndex,
      answer: score
    });
  }
}
