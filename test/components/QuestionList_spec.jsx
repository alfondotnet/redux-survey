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
      <QuestionList list={['Question 1', 'Question 2']} />
    );

    const liItems = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(liItems.length).to.equal(2);
    expect(liItems[0].textContent).to.equal('Question 1');
    expect(liItems[1].textContent).to.equal('Question 2');
  });

});
