import React, {Component, PropTypes} from 'react';
import {Panel, Button, ButtonGroup, Col} from 'react-bootstrap';

class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    questionIndex: PropTypes.string.isRequired
  };

  _answer = (e) => this.answer(parseInt(e.target.textContent));

  answer(option) {
    const {questionIndex, actions} = this.props;

    console.log(actions.answer);

    actions.answer(questionIndex, option);
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
