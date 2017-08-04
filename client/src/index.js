import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import thunk from 'redux-thunk';
import './index.css';
import CheeseList from './components/cheese-list';
import cheeseReducer from './reducers/cheese';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(cheeseReducer, applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const cheeses=[
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
];

ReactDOM.render(

  <Provider store={store}>  
     <CheeseList cheeses={cheeses}/>
  </Provider>,
  document.getElementById('root')
);
