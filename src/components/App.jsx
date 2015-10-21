import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {List,Map} from 'immutable';
import QuestionList from './QuestionList';

class App extends Component {

  render() {
    const {dispatch, list, onAnswer} = this.props;
    return <QuestionList
            dispatch={dispatch}
            list={list} />;
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const {questionList} = state;

  return {
    list: questionList.get('questionList'),
  };
}

export default connect(mapStateToProps)(App);
