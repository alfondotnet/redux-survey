import React from 'react';
import QuestionList from './QuestionList';

const listQuestions = ['Question 1', 'Question 2'];

export default React.createClass({
  render: function() {
    return <div className="app">
      <QuestionList list={listQuestions} />
    </div>;
  }
});
