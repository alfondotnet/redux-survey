import * as types from '../constants/ActionTypes';
import {Map, fromJS} from 'immutable';
import initialQuestionList from '../data/questionList';

// Reducer questionList
// It handles the following actions
// ANSWER_QUESTION: Answer a question
export function questionList(state = Map({questionList: fromJS(initialQuestionList)}), action) {
  switch(action.type) {
    case types.ANSWER_QUESTION:

      console.log(state);

      const qMap = state.get('questionList');
      const questionToUpdate = qMap.get(action.questionIndex);
      const updatedQMap = qMap.set(action.questionIndex, questionToUpdate.set('answer', action.answer));
      const updatedState = state.set('questionList', updatedQMap);
      return updatedState;
    default:
      return state;
  }
}
