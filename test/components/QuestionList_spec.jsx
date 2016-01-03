import React from 'react';
import TestUtils from 'react-addons-test-utils';
import QuestionList from '../../src/components/QuestionList';
import App from '../../src/containers/App';
import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';
import { countAnswered, countQuestions } from '../../src/util/questionsFunctions';

const {
  renderIntoDocument,
  findAllInRenderedTree,
  isDOMComponent,
  Simulate,
  scryRenderedDOMComponentsWithTag
} = TestUtils;

function scryRenderedDOMComponentsWithClassName(tree, className) {
  return findAllInRenderedTree(tree, function(inst) {
    //if (isDOMComponent(inst)) console.log(inst.getAttribute('class'));
    return isDOMComponent(inst) && inst.getAttribute('class') === className;
  });
}

// So we create a Question list of 2 test questions for testing
const questionListData = fromJS([
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
]);

describe('QuestionList', () => {

  it('renders a pair of questions', () => {

    const component = renderIntoDocument(
        <QuestionList
          list={questionListData}
          countAnswered={() => countAnswered(questionListData)}
          countQuestions={() => countQuestions(questionListData)} />
    );

    const questionBoxes = scryRenderedDOMComponentsWithClassName(component, 'questionBox');
    const answerBoxes = scryRenderedDOMComponentsWithClassName(component, 'answerBox');

    expect(questionBoxes.length).to.equal(2);
    // 6 possible answers for 2 questions
    expect(answerBoxes.length).to.equal(6);

  });


  it('invokes callback when a question is answered', () => {

    let answered;
    const callback = (answer, index) => answered = answer;

    const component = renderIntoDocument(
      <QuestionList
        list={questionListData}
        countAnswered={() => countAnswered(questionListData)}
        countQuestions={() => countQuestions(questionListData)}
        onAnswerQuestion={(a,i) => callback(a,i)} />
    );

    const answers = scryRenderedDOMComponentsWithClassName(component, 'answerBox');

    console.log(answers[2].children[0].textContent);

    Simulate.click(answers[2].children[0]);
    expect(answered).to.equal(3);

    Simulate.click(answers[3].children[0]);
    expect(answered).to.equal(1);

  });

});
