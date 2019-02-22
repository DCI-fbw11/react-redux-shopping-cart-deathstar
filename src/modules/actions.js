import {ADD_PRODUCT,REMOVE_ONE,REMOVE_ALL,CHECKOUT} from './actionTypes'  

export function addProduct(payload){
  return {
    type: ADD_PRODUCT,
    payload
  }
}

export function removeOne(payload){
  return {
    type: REMOVE_ONE,
    payload
  }
}

export function removeAll(payload){
  return {
    type: REMOVE_ALL,
    payload
  }
}

export function checkout(payload){
  return {
    type: CHECKOUT
  }
}
