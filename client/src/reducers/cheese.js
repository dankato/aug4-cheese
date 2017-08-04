import React from 'react';
import {
  fetchCheesesRequest,
  fetchCheesesSuccess,
  fetchCheesesError
} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default (cheeseReducer = (state, action) => {
  if (action.type === fetchCheesesRequest) {
  }
  if (action.type === fetchCheesesSuccess) {
  }
  if (action.type === fetchCheesesError) {
  }
  return state;
});

// const reducer = (state=initialState, action) => {
//     if (action.type === actions.CHANGE_FOO) {
//         return Object.assign({}, state, {
//             foo: 'baz'
//         });
//     }
//     else if (action.type === actions.UNSET_FOO) {
//         return Object.assign({}, state, {
//             foo: null
//         });
//     }
//     return state;
// }
