import React from 'react';

export default React.createClass({
  getList: function() {
    return this.props.list || [];
  },
  render: function() {
    return <div>
      <h2>Question list</h2>
      <div>
      {this.getList().map((q, i) => <div className="questionBox">
        <div className="questionTitle">{q.question}</div>
        <div className="answerBox">
          <button
            key={"answer"+q}
            onClick={() => this.props.onAnswer(i,3)}>
            Answer
          </button>
        </div>
      </div>
      )}
      </div>
    </div>;
  }
});
