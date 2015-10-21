import React, {Component, PropTypes} from 'react';
import {answer} from '../actions/question';

class Question extends Component {

  answer(option) {
    const {dispatch, questionIndex} = this.props;
    dispatch(answer(questionIndex, option));
  }

  render() {
    const {question, questionIndex} = this.props;
    if (question.get('answer') === null) {
      return <div className="questionBox">
          <div className="questionTitle">{question.get('questionText')}</div>
          <div className="answerBox">
            <ul className="listOptions">
              {question.get('possibleAnswers').map(
                (option, optionIndex) =>
                  <li
                    key={'option_' + optionIndex}
                    className="answerOption"
                    onClick={() => this.answer(option)}>
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
}

Question.propTypes = {
  dispatch: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired
};

export default Question;
