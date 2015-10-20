import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

// this is to combine all the reducers

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
  }
  return state;
}
