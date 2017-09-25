
import React from 'react'
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import Funcstore from './store';
import {Provider} from 'react-redux';

import { requestTables} from './actionCreators';



const store = Funcstore();

store.dispatch(requestTables())

console.log(store);

ReactDOM.render(

  <BrowserRouter>

  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
