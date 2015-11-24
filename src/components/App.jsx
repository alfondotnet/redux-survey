import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {List,Map} from 'immutable';
import QuestionList from './QuestionList';
import Results from './Results';
import * as stepsTypes from '../constants/Steps';
import {changeStep} from '../actions/ui';

class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  renderSection() {
    const {list, step, dispatch} = this.props;

    switch(step){
      case stepsTypes.INTRODUCTION:
        return <div>
                <p>Welcome to the Survey</p>
                <p onClick={() => dispatch(changeStep(stepsTypes.QUESTIONS))}>Begin survey</p>
               </div>;
      case stepsTypes.QUESTIONS:
        return <QuestionList
                 dispatch={dispatch}
                 list={list} />;
      case stepsTypes.RESULTS:
        return <Results
                 dispatch={dispatch}
                 list={list} />;
    }
  }

  render() {
    const {dispatch, list, onAnswer} = this.props;
    return <div className="container">
            {this.renderSection()}
           </div>;
  }
}

function mapStateToProps(state) {

  const {questionList, steps} = state;

  return {
    list: questionList.get('questionList'),
    step: steps.get('step'),
  };
}

export default connect(mapStateToProps)(App);
