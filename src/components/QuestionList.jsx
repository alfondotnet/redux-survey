import React from 'react';
import Question from './Question';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const QuestionList = React.createClass({
  mixins: [PureRenderMixin],

  getList: function() {
    return this.props.list || [];
  },
  render: function() {

    const qList = this.getList();

    return <div>
      <h2>Question list</h2>
      <div>
      {qList.map((q, questionIndex) => {

        return <Question
          key={'question_'+questionIndex}
          questionIndex={questionIndex}
          question={q}
          onAnswer={this.props.onAnswer} />
      }
      )}
      </div>
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    list: state.get('questionList')
  };
}

export const QuestionListContainer = connect(mapStateToProps)(QuestionList);
