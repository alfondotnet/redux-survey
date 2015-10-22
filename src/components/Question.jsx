import React, {Component, PropTypes} from 'react';
import {answer} from '../actions/question';
import {Panel, Button, ButtonGroup} from 'react-bootstrap';

class Question extends Component {

  answer(option) {
    const {dispatch, questionIndex} = this.props;
    dispatch(answer(questionIndex, option));
  }

  render() {
    const {question, questionIndex} = this.props;
    if (question.get('answer') === null) {
      return <div className="col-md-3">
          <Panel header={<h3>{question.get('questionText')}</h3>}>
            <div>
            <ButtonGroup>
              {question.get('possibleAnswers').map(
                (option, optionIndex) =>
                  <Button
                    key={'option_' + optionIndex}
                    onClick={() => this.answer(option)}>
                    {option}
                  </Button>
              )}
            </ButtonGroup>
            </div>
          </Panel>
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
