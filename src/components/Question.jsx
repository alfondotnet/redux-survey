import React, {Component, PropTypes} from 'react';
import {answer} from '../actions/question';
import {Panel, Button, ButtonGroup, Col} from 'react-bootstrap';

class Question extends Component {

  static propTypes = {
  dispatch: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.string.isRequired
  };

  answer(option) {
    const {dispatch, questionIndex} = this.props;
    dispatch(answer(questionIndex, option));
  }

  render() {
    const {question, questionIndex} = this.props;
    if (question.get('answer') === null) {
      return <Col md={3} xs={12} lg={3}>
          <Panel header={<h3>{question.get('questionText')}</h3>}>
            <ButtonGroup>
              {question.get('possibleAnswers').map(
                (option, optionIndex) =>
                  <Button
                    key={'option_' + optionIndex}
                    onClick={this.answer.bind(this, option)}>
                    {option}
                  </Button>
              )}
            </ButtonGroup>
          </Panel>
        </Col>
    } else {
      return null;
    }
  }
}

export default Question;
