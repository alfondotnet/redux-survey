import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {List,Map} from 'immutable';
import QuestionList from './QuestionList';
import Results from './Results';

class App extends Component {
  render() {
    const {dispatch, list, onAnswer} = this.props;
    return <div>
            <QuestionList
              dispatch={dispatch}
              list={list} />
            <Results
              dispatch={dispatch}
              list={list} />
            </div>;
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
