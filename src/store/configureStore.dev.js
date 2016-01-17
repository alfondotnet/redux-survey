import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const middleware = [thunk];

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  reduxReactRouter({
    routes,
    createHistory,
    // routerStateSelector: state => { console.log(state); return state.get('router') }
  }),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
