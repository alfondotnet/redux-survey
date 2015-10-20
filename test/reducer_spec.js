import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducers/index';

const sampleQuestionList = [
        {
          questionText: 'Question 1',
          answer: null,
          possibleAnswers: [1,2,3],
          getScore: function(score) { return score; }
        },
        {
          questionText: 'Question 2',
          answer: null,
          possibleAnswers: [1,2,3],
          getScore: function(score) { return score + 1; }
        }
      ];

describe('Reducer', () => {

  it('handles SET_STATE', () => {

    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        questionList: sampleQuestionList
      }
    };

    const nextState = reducer(initialState, action);
    const nextQuestionList = nextState.get('questionList');
    expect(nextQuestionList).to.equal(fromJS(sampleQuestionList));

  });
});
