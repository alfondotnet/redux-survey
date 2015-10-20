import {createStore} from 'redux';
import reducer from '../reducers/index';

export default function configureStore(initialState) {
  // have to apply middleware, check thunk
  const store = createStore(reducer);

  return store;
}
