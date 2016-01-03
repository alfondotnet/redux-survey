import * as types from '../constants/ActionTypes';
import {Map, fromJS} from 'immutable';
import initialQuestionList from '../data/questionList';

// Reducer questionList
// It handles the following actions
// ANSWER_QUESTION: Answer a question.

// TODO: Should this reducer check if the answer is permitted in the 'possibleAnswers' array of the question?
// make it more 'functional'
export function questionList(state = Map({questionList: fromJS(initialQuestionList)}), action) {
  switch(action.type) {
    case types.ANSWER_QUESTION:
      const answerProvided = action.answer.option;
      const qMap = state.get('questionList');

      const questionToUpdate = qMap.get(action.answer.questionIndex);
      // This design (albeit possibly inevitable) is extremely risky as it puts too much pressure on the 'end user'
      // (the function "getScore" must be a pure function in order for this design to work)
      const newAnswer = (answerProvided === null) ? null : questionToUpdate.get('getScore')(answerProvided);
      const updatedQMap = qMap.set(action.answer.questionIndex, questionToUpdate.set('answer', newAnswer));
      const updatedState = state.set('questionList', updatedQMap);
      return updatedState;
    default:
      return state;
  }
}
