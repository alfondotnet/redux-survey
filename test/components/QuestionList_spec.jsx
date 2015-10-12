import React from 'react';
import TestUtils from 'react-addons-test-utils';
import QuestionList from '../../src/components/QuestionList';
import {expect} from 'chai';

const {
        renderIntoDocument,
        findAllInRenderedTree,
        isDOMComponent,
        Simulate,
        scryRenderedDOMComponentsWithTag
      } = TestUtils;

function scryRenderedDOMComponentsWithClassName(tree, className) {
  return findAllInRenderedTree(tree, function(inst) {
    return isDOMComponent(inst) && inst.getAttribute('class') === className;
  });
}


// So we create a Question list of 2 test questions for testing
const questionListData = [
                    {
                      question: 'Question 1',
                      answer: null,
                      possibleAnswers: [1,2,3],
                      getScore: function(score) { return score; }
                    },
                    {
                      question: 'Question 2',
                      answer: null,
                      possibleAnswers: [1,2,3],
                      getScore: function(score) { return score + 1; }
                    }
                  ];

describe('QuestionList', () => {
  it('renders a pair of questions', () => {

    const component = renderIntoDocument(
      <QuestionList
        list={questionListData} />
    );

    const divTitles = scryRenderedDOMComponentsWithClassName(component, 'questionTitle');
    const liOptions = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(divTitles.length).to.equal(2);
    expect(divTitles[0].textContent).to.equal('Question 1');
    expect(divTitles[1].textContent).to.equal('Question 2');

    // 6 possible answers for 2 questions
    expect(liOptions.length).to.equal(6);

  });


  it('invokes callback when a question is answered', () => {

    let answered;
    const callback = (index, answer) => answered = answer;

    const component = renderIntoDocument(
      <QuestionList
        list={questionListData}
        onAnswer={callback} />
    );

    const liOptions = scryRenderedDOMComponentsWithTag(component, 'li');

    Simulate.click(liOptions[2]);
    expect(answered).to.equal(3);

    Simulate.click(liOptions[3]);
    expect(answered).to.equal(1);

  });

});
