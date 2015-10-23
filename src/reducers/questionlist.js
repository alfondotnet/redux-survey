import * as types from '../constants/ActionTypes';
import {Map, fromJS} from 'immutable';
import initialQuestionList from '../fixtures/sample';

export function questionList(state = Map({questionList: fromJS(initialQuestionList)}), action) {

  switch(action.type) {
    case types.ANSWER_QUESTION:

      const answerProvided = action.answer.option;
      const qMap = state.get('questionList');
      const questionToUpdate = qMap.get(action.answer.questionIndex);
      const newAnswer = (answerProvided === null) ? null : questionToUpdate.get('getScore')(answerProvided);
      const updatedQMap = qMap.set(action.answer.questionIndex, questionToUpdate.set('answer', newAnswer));
      const updatedState = state.set('questionList', updatedQMap);

      return updatedState;
    default:
      return state;
  }
}
