import React from 'react';
import ReactDOM from 'react-dom';
//css
import './scss/index.scss';

//components
import App from '../src/components/App';

import { Provider } from "react-redux";
import store from "./redux/store";




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));