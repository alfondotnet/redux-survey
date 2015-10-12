import React from 'react/addons';
import QuestionList from '../../src/components/QuestionList';
import {expect} from 'chai';

const {
        renderIntoDocument,
        findAllInRenderedTree,
        isDOMComponent
      } = React.addons.TestUtils;

function scryRenderedDOMComponentsWithClassName(tree, className) {
  return findAllInRenderedTree(tree, function(inst) {
    return isDOMComponent(inst) && inst.props.className === className;
  });
}

describe('QuestionList', () => {
  it('renders a pair of questions', () => {
    const component = renderIntoDocument(
      <QuestionList list={[{
                            question: 'Question 1',
                            score: null,
                            possibleAnswers: [1,2,3],
                            extraPoints: 1,
                           },
                           {
                            question: 'Question 2',
                            score: null,
                            possibleAnswers: [1,2,3],
                            extraPoints: 2,
                           }]} />
    );

    const divItems = scryRenderedDOMComponentsWithClassName(component, 'question');

    expect(divItems.length).to.equal(2);
    expect(divItems[0].textContent).to.equal('Question 1');
    expect(divItems[1].textContent).to.equal('Question 2');
  });

});
