import React, {Component, PropTypes} from 'react';
import Question from './Question';
import {connect} from 'react-redux';

class QuestionList extends Component {

  render() {
    const {list, dispatch} = this.props;

    return <div>
      <h2>Question list</h2>
      <div>
      {list.map((q, questionIndex) => {
        return <Question
          key={'question_'+questionIndex}
          questionIndex={questionIndex}
          question={q}
          dispatch={dispatch} />
      }
      )}
      </div>
    </div>;
  }
}

QuestionList.propTypes = {
  list: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default QuestionList;
