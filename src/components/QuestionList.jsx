import React from 'react';
import Question from './Question';

export default React.createClass({
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
