import React from 'react/addons';
import QuestionList from '../../src/components/QuestionList';
import {expect} from 'chai';

const {
        renderIntoDocument,
        scryRenderedDOMComponentsWithTag
      } = React.addons.TestUtils;

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

    const divItems = scryRenderedDOMComponentsWithTag(component, 'div');

    expect(divItems.length).to.equal(4);
    expect(divItems[2].textContent).to.equal('Question 1');
    expect(divItems[3].textContent).to.equal('Question 2');
  });

});
