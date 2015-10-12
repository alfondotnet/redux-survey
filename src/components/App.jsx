import React from 'react';
import QuestionList from './QuestionList';

const initialState = {
                      questionList: [
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
                      ]
                    };

export default React.createClass({
  render: function() {
    return <div className="app">
      <QuestionList
        list={initialState.questionList}
        onAnswer={(questionIndex,answer) => console.log('answered question '+ questionIndex + ' with answer ' + answer)} />
    </div>;
  }
});
