import React,{Component, PropTypes} from 'react';
import Question from './Question';
import {connect} from 'react-redux';
import {Panel, Row, Col} from 'react-bootstrap';
import * as stepsTypes from '../constants/Steps';
import {changeStep} from '../actions/ui';

class QuestionList extends Component {

  static propTypes = {
    list: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  signAnswer(ans) {
    if (ans === null) {
      return null;
    } else {
      return 1;
    }
  }

  sumNotCoercion(a,b) {
    if (a === null && b === null) {
      return null;
    } else {
      return a + b;
    }
  }

  countAnswered() {
    const {list} = this.props;
    return list.skip(1).map(q => q.get('answer'))
               .reduce((red,val) => this.sumNotCoercion(red,this.signAnswer(val)),
                       this.signAnswer(list.first().get('answer')));
  }

  renderListQuestions() {

    const {list, dispatch} = this.props;

    if (this.countAnswered() === list.size)
    {
      return <Col xs={12} md={12}><Panel onClick={() => dispatch(changeStep(stepsTypes.RESULTS))}>View results</Panel></Col>;
    } else {
      return list.map((q, questionIndex) => {
        return <Question
          key={'question_'+questionIndex}
          questionIndex={questionIndex}
          question={q}
          dispatch={dispatch} />
      }).toList();
    }
  }

  render() {
    const {list, dispatch} = this.props;

    return <div>
      <h2>Question list</h2>
      <Row>
        {this.renderListQuestions()}
      </Row>
    </div>;
  }
}

export default QuestionList;
