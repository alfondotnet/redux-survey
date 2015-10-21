import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {List,Map} from 'immutable';
import QuestionList from './QuestionList';

class App extends Component {

  componentWillMount() {
  }

  render() {

    const {dispatch, list, onAnswer} = this.props;
    return <QuestionList
            dispatch={dispatch}
            list={list}
            onAnswer={onAnswer} />;
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {

  const {initQuestionList} = state;

  return {
    list: initQuestionList.get('questionList'),
    // migrate below to action
    onAnswer: function(qi, op) { console.log('answered '+ qi + ' question with answer '+ op); }
  };
}

export default connect(mapStateToProps)(App);
