// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn mo re: https://bit.ly/CRA-vitals
// reportWebVitals();

import store from './store/store'
import {bugAdded}  from './actions'
const unsubscribe = store.subscribe (()=>{
  console.log("Store Changed" , store.getState())
})

store.dispatch(bugAdded("Bug 1"));

console.log(store.getState());