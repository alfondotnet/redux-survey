import * as types from '../constants/ActionTypes';
import questionListData from '../data/questionList';

// we return a function that computes the action based on the value of
// the getScore function
// TODO: Maybe check that the value is permitted here?
export function answer(questionIndex, option) {
  return dispatch => {

    // We have to answer null if the option is null, otherwise (un-responding) questions
    // can't work if the user adds something like ans * 0.4 => 0 in getScore
    const score = option === null ? null : questionListData[questionIndex].getScore(option);

    dispatch({
      type: types.ANSWER_QUESTION,
      questionIndex,
      answer: score
    });
  }
}
