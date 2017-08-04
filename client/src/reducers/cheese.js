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

const cheeseReducer = (state=initialState, action) => {
  if (action.type === fetchCheesesRequest) {
    return Object.assign({}, state, {
      loading: true
    })
  }
  if (action.type === fetchCheesesSuccess) {
    return Object.assign({}, state, {
      cheeses: action.cheeses,
      loading: false,
      error: null

    })    
  }
  if (action.type === fetchCheesesError) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })       
  }
  return state;
};

export default cheeseReducer;