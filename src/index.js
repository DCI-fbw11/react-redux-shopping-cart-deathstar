import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import products from './products.json';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload[0].id]: action.payload[0]
        },
        cart: { ...state.cart, [action.payload[0].id]: action.payload[1] }
      };
    default:
      return state;
  }
};
/* ↑
 * ↑ you should delete this line
 * and create a proper reducer and import it.
 * like this ↓
 * import { appReducer } from "./modules/reducers"
 */

const initialState = {
  products,
  cart: {}
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
