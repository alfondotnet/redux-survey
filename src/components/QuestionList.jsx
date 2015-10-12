import React from 'react';

export default React.createClass({
  getList: function() {
    return this.props.list || [];
  },
  render: function() {
    return <div>
      <h2>Question list</h2>
      <div>
      {this.getList().map(q => <div>
        {q.question}</div>
      )}
      </div>
    </div>;
  }
});
