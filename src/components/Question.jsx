import React, {Component, PropTypes} from 'react';
import {Panel, Button, ButtonGroup, Col} from 'react-bootstrap';

class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    questionIndex: PropTypes.string.isRequired,
    onAnswer: PropTypes.func.isRequired
  };

  _answer = (e) => this.props.onAnswer(parseInt(e.target.textContent), this.props.questionIndex);

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
                    onClick={this._answer}>
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
