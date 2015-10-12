import React from 'react';

export default React.createClass({
  getList: function() {
    return this.props.list || [];
  },
  render: function() {
    return <div>
      <h2>Question list</h2>
      <ul>
      {this.getList().map(question =>
        <li>{question}</li>
      )}
      </ul>
    </div>;
  }
});
