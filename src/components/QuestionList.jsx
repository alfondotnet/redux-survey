import React,{Component, PropTypes} from 'react';
import Question from './Question';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {Panel, Row, Col, ProgressBar} from 'react-bootstrap';

class QuestionList extends Component {

  static propTypes = {
    // list is set to optional as this component is created with cloneElement so isRequired would show a
    // warning, this can be done with the help of contexts
    // https://github.com/facebook/react/issues/4494
    list: PropTypes.object,
  };

  onAnswerQuestion(option, questionIndex) {
    const {actions} = this.props;
    actions.answer(questionIndex, option);
  }

  renderProgressBar(percentage) {

    const colorStyle = (percentage === 100) ? "success" : "info";

    return (
      <ProgressBar
        max={100}
        min={0}
        now={percentage}
        bsStyle={colorStyle} />
    );
  }

  renderListQuestions() {
    const {list, actions, countAnswered} = this.props;

    if (countAnswered() === list.size)
    {
      return <Col xs={12} md={12}><Panel><Link to='/results'>View results</Link></Panel></Col>;
    } else {
      return list.map((q, questionIndex) => {
        return <Question
          key={'question_'+questionIndex}
          questionIndex={questionIndex}
          question={q}
          onAnswer={(op,qi) => this.onAnswerQuestion(op,qi)} />
      }).toList();
    }
  }

  render() {
    const {list, countAnswered, countQuestions} = this.props;

    return <div>
      <h2>Percentage completed</h2>
      <Row>
        {this.renderProgressBar((countAnswered() * 100) / countQuestions())}
      </Row>
      <h2>Question list</h2>
      <Row>
        {this.renderListQuestions()}
      </Row>
    </div>;
  }
}

export default QuestionList;
