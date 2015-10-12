import React from 'react';
import QuestionList from './QuestionList';

const initialState = {
                      questionList: [
                        {
                          question: 'Question 1',
                          score: null,
                          extraPoints: 1,
                        },
                        {
                          question: 'Question 2',
                          score: null,
                          extraPoints: 2,
                        }
                      ]
                    };

export default React.createClass({
  render: function() {
    return <div className="app">
      <QuestionList list={initialState.questionList} />
    </div>;
  }
});
