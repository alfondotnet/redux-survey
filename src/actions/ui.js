import * as types from '../constants/ActionTypes';

export function changeStep(step) {
  return {
    type: types.CHANGE_STEP,
    step
  }
}
