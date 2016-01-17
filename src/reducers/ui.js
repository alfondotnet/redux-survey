import * as types from '../constants/ActionTypes';
import * as stepsTypes from '../constants/Steps';
import {Map} from 'immutable';

export function steps(state = Map({step: stepsTypes.INTRODUCTION}), action) {
  switch (action.type) {
    case types.CHANGE_STEP:
      return state.set('step', action.step);
    default:
      return state;
  }
}
