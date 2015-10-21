import React, {Component, PropTypes} from 'react';
import Question from './Question';
import {connect} from 'react-redux';

class QuestionList extends Component {

  render() {

    console.log(this.props);

    const {list,onAnswer} = this.props;

    return <div>
      <h2>Question list</h2>
      <div>
      {list.map((q, questionIndex) => {
        return <Question
          key={'question_'+questionIndex}
          questionIndex={questionIndex}
          question={q}
          onAnswer={onAnswer} />
      }
      )}
      </div>
    </div>;
  }
}

QuestionList.propTypes = {
  list: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default QuestionList;
