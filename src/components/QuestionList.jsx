import React from 'react';
import Question from './Question';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const QuestionList = React.createClass({
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
  console.log('saasasas');
  return {
    list: state.get('questionList')
  };
}

connect(mapStateToProps)(QuestionList);

export default QuestionList;
