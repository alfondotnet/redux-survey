import { createStore, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const finalCreateStore = compose(
  reduxReactRouter({
    routes,
    createHistory,
    //routerStateSelector: state => { console.log(state); return state.get('router') }
  }),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  // have to apply middleware, check thunk
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
