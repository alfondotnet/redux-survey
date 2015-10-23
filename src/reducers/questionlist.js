import * as types from '../constants/ActionTypes';
import {Map, fromJS} from 'immutable';
import initialQuestionList from '../fixtures/sample';

export function questionList(state = Map({questionList: fromJS(initialQuestionList)}), action) {

  switch(action.type) {
    case types.ANSWER_QUESTION:

      const qMap = state.get('questionList');
      const questionToUpdate = qMap.get(action.answer.questionIndex);
      const updatedState = state.set('questionList', qMap.set(action.answer.questionIndex, questionToUpdate.set('answer', questionToUpdate.get('getScore')(action.answer.option))));

      return updatedState;
    default:
      return state;
  }
}
