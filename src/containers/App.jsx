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

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  signAnswer(ans) {
    if (ans === null) {
      return null;
    } else {
      return 1;
    }
  }

  sumNotCoercion(a,b) {
    if (a === null && b === null) {
      return null;
    } else {
      return a + b;
    }
  }

  countAnswered() {
    const {list} = this.props;
    return list.skip(1).map(q => q.get('answer'))
               .reduce((red,val) => this.sumNotCoercion(red,this.signAnswer(val)),
                       this.signAnswer(list.first().get('answer')));
  }

  countQuestions() {
    const {list} = this.props;
    return list.size;
  }

  render() {
    const { dispatch, list, onAnswer, children, actions } = this.props;

    return <div className="container">
            {React.cloneElement(children, {
                                            list,
                                            actions,
                                            countAnswered: () => this.countAnswered(),
                                            countQuestions: () => this.countQuestions()
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
