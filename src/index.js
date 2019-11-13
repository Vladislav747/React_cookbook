import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD

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
=======
//css
import './scss/index.scss';

import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

//components
import App from '../src/containers/App';
import AddRecipeForm from './components/AddRecipeForm';

ReactDOM.render(
<Provider store={store}>
<Router>
  <Route component={App}/>>
  <Route path="/addrecipeform" component={AddRecipeForm} />
  </Router>
</Provider>, 
document.getElementById('root'));
>>>>>>> development_v-2
