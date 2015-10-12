import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="questionBox">
        <div className="questionTitle">{this.props.question.questionText}</div>
        <div className="answerBox">
          <ul>
            {this.props.question.possibleAnswers.map(
              (option, optionIndex) =>
                <li
                  key={'option_' + optionIndex}
                  className="answerOption"
                  onClick={() => this.props.onAnswer(this.props.questionIndex,option)}>
                  {option}
                </li>
            )}
          </ul>
        </div>
      </div>
  }
});

const styles = {};
