import products from '../products.json';
import {ADD_PRODUCT,REMOVE_ONE,REMOVE_ALL,CHECKOUT} from '../modules/actionTypes';

const initialState = {
  products,
  cart: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.catalogUpdateItem.id]:
            action.payload.catalogUpdateItem
        },
        cart: {
          ...state.cart,
          [action.payload.cartUpdateItem.id]: action.payload.cartUpdateItem
        }
      };
    case REMOVE_ONE:
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.catalogUpdateItem.id]:
            action.payload.catalogUpdateItem
        },
        cart: {
          ...state.cart,
          [action.payload.cartUpdateItem.id]: action.payload.cartUpdateItem
        }
      };
    case REMOVE_ALL:
      return {...state,
        products: {
          ...state.products,
          [action.payload.id]:
            action.payload
        },
        cart: Object.keys(state.cart).reduce((result, key) => {
          if (Number(key) !== action.payload.id) {
            result[key] = state.cart[key];
          }
          return result;
        }, {})
      }
      ;
    case CHECKOUT:
      return {
        ...state,
        cart: {}
      };
    default:
      return state;
  }
};
export default reducer;


