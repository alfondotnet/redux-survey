import React from 'react/addons';
import QuestionList from '../../src/components/QuestionList';
import {expect} from 'chai';

const {
        renderIntoDocument,
        findAllInRenderedTree,
        isDOMComponent,
        Simulate,
        scryRenderedDOMComponentsWithTag
      } = React.addons.TestUtils;

function scryRenderedDOMComponentsWithClassName(tree, className) {
  return findAllInRenderedTree(tree, function(inst) {
    return isDOMComponent(inst) && inst.props.className === className;
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

    const divItems = scryRenderedDOMComponentsWithClassName(component, 'questionTitle');

    expect(divItems.length).to.equal(2);
    expect(divItems[0].textContent).to.equal('Question 1');
    expect(divItems[1].textContent).to.equal('Question 2');
  });


  it('invokes callback when a question is answered', () => {

    let answered;
    const callback = (index, answer) => answered = answer;

    const component = renderIntoDocument(
      <QuestionList
        list={questionListData}
        onAnswer={callback} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    expect(answered).to.equal(3);

  });

});
