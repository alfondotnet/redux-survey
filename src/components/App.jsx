import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List,Map} from 'immutable';
import QuestionList from './QuestionList';

const initialState = Map({
                      questionList: List([
                        Map({
                          questionText: 'Question 1',
                          answer: null,
                          possibleAnswers: List.of(1,2,3),
                          getScore: function(score) { return score; }
                        }),
                        Map({
                          questionText: 'Question 2',
                          answer: null,
                          possibleAnswers: List.of(1,2,3),
                          getScore: function(score) { return score + 1; }
                        })
                      ])
                    });

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="app">
      <QuestionList
        list={initialState.get('questionList')}
        onAnswer={(questionIndex,answer) => console.log('answered question '+ questionIndex + ' with answer ' + answer)} />
    </div>;
  }
});
