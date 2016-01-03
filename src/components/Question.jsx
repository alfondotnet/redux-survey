import React, {Component, PropTypes} from 'react';
import {Panel, Button, ButtonGroup, Col} from 'react-bootstrap';

class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    questionIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onAnswer: PropTypes.func.isRequired
  };

  render() {
    const {question, questionIndex, onAnswer} = this.props;
    if (question.get('answer') === null) {
      return <div className={'questionBox'}>
        <Col md={3} xs={12} lg={3}>
          <Panel header={<h3>{question.get('questionText')}</h3>}>
            <ButtonGroup>
              {question.get('possibleAnswers').map(
                (option, optionIndex) =>
                  <div className={'answerBox'} key={'option_' + optionIndex}>
                    <Button
                      onClick={() => onAnswer(option, questionIndex)}>
                      {option}
                    </Button>
                  </div>
              )}
            </ButtonGroup>
          </Panel>
        </Col>
        </div>
    } else {
      return null;
    }
  }
}

export default Question;
