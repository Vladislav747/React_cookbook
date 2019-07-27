import React from 'react';
import ReactDOM from 'react-dom';
//css
import './scss/index.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";


//components
import App from '../src/components/App';

import { Provider } from "react-redux";
import store from "./redux/store";
import AddRecipeForm from './components/AddRecipeForm';


ReactDOM.render(
<Provider store={store}>
<Router>
    <Route  component={App}/>>
    <Route path="/addrecipeform" component={AddRecipeForm} />
    
  </Router>
</Provider>, 
document.getElementById('root'));