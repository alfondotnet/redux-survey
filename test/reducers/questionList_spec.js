import { List, Map, fromJS, toJS } from 'immutable';
import { expect, chai } from 'chai';
import { inspect } from 'util';

import { questionList } from '../../src/reducers/questionlist';

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

describe('questionList reducer', () => {

  it('handles ANSWER_QUESTION', () => {

    const initialState = Map(fromJS({questionList: sampleQuestionList}));

    const action = {
      type: 'ANSWER_QUESTION',
      answer: {
        option: 2,
        questionIndex:1
      }
    };

    const updatedQuestionlist = [
        {
          questionText: 'Question 1',
          answer: null,
          possibleAnswers: [1,2,3],
          getScore: sampleQuestionList[0].getScore
        },
        {
          questionText: 'Question 2',
          answer: 3,
          possibleAnswers: [1,2,3],
          getScore: sampleQuestionList[1].getScore
        }
      ];

    const nextQuestionList = questionList(initialState, action).get('questionList').toJS();
    expect(nextQuestionList).to.deep.equal(updatedQuestionlist);


  });
});
