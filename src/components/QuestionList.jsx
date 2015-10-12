import React from 'react';

export default React.createClass({
  getList: function() {
    return this.props.list || [];
  },
  render: function() {

    const qList = this.getList();

    return <div>
      <h2>Question list</h2>
      <div>
      {qList.map((q, questionIndex) => <div key={'question_'+ questionIndex} className="questionBox">
        <div className="questionTitle">{q.question}</div>
        <div className="answerBox">
          <ul>
            {q.possibleAnswers.map(
              (option, optionIndex) =>
                <li
                  key={'option_' + optionIndex}
                  className="answerOption"
                  onClick={() => this.props.onAnswer(questionIndex,option)}>
                  {option}
                </li>
            )}
          </ul>
        </div>
      </div>
      )}
      </div>
    </div>;
  }
});
