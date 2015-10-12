import React from 'react';

export default React.createClass({
  render: function() {

    const {question, onAnswer, questionIndex} = this.props;

    if (question.answer === null) {
      return <div className="questionBox">
          <div className="questionTitle">{question.questionText}</div>
          <div className="answerBox">
            <ul className="listOptions">
              {question.possibleAnswers.map(
                (option, optionIndex) =>
                  <li
                    key={'option_' + optionIndex}
                    className="answerOption"
                    onClick={() => onAnswer(questionIndex,option)}>
                    {option}
                  </li>
              )}
            </ul>
          </div>
        </div>
    } else {
      return null;
    }
  }
});
