import { createStore, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import rootReducer from '../reducers';

const finalCreateStore = compose(
 reduxReactRouter({
    routes,
    createHistory,
    //routerStateSelector: state => { console.log(state); return state.get('router') }
  })
)(createStore);

export default function configureStore(initialState) {
  // have to apply middleware, check thunk
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
