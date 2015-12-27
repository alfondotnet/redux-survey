import React,{Component, PropTypes} from 'react';
import Question from './Question';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {Panel, Row, Col} from 'react-bootstrap';

class QuestionList extends Component {

  static propTypes = {
    // list is set to optional as this component is created with cloneElement so isRequired would show a
    // warning, this can be done with the help of contexts
    // https://github.com/facebook/react/issues/4494
    list: PropTypes.object,
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
    const {list, actions} = this.props;

    if (this.countAnswered() === list.size)
    {
      return <Col xs={12} md={12}><Panel><Link to='/results'>View results</Link></Panel></Col>;
    } else {
      return list.map((q, questionIndex) => {
        return <Question
          key={'question_'+questionIndex}
          questionIndex={questionIndex}
          question={q}
          actions={actions} />
      }).toList();
    }
  }

  render() {
    const {list} = this.props;

    return <div>
      <h2>Question list</h2>
      <Row>
        {this.renderListQuestions()}
      </Row>
    </div>;
  }
}

export default QuestionList;
