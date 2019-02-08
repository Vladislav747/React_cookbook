import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css';


ReactDOM.render(<App />, document.getElementById('root'));

// const wrapper = document.getElementById("create-article-form");
// if(wrapper){
//     ReactDOM.render(<App />, wrapper);
// } else{
//     ReactDOM.render(<App />, document.getElementById('root'));
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
