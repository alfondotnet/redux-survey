import React,{ Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List,Map } from 'immutable';
import QuestionList from '../components/QuestionList';
import Results from '../components/Results';
import { pushState } from 'redux-router';
import * as stepsTypes from '../constants/Steps';
import { changeStep } from '../actions/ui';
import * as QuestionActions from '../actions/question';
import { countAnswered, countQuestions, onAnswerQuestion } from '../util/questionsFunctions';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    actions: PropTypes.object.isRequired,
  };



  render() {
    const { dispatch, list, onAnswer, children, actions } = this.props;

    return <div className="container">
            {React.cloneElement(children, {
                                            list,
                                            actions,
                                            countAnswered: () => countAnswered(list),
                                            countQuestions: () => countQuestions(list),
                                            onAnswerQuestion: (op,qi) => onAnswerQuestion(actions,op,qi)
                                          })}
           </div>;
  }
}

function mapStateToProps(state) {
  const { questionList } = state;

  return {
    list: questionList.get('questionList'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(QuestionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
