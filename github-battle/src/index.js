import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter ,Route} from 'react-router-dom';
import Battle from './Component/Battle';
import Header from './Component/Header';




ReactDOM.render(
  <BrowserRouter >
  <div className='container'>
    <Header/>

  <Route path='/battle'>
    <Battle />
  </Route>
  <Route path='/' exact
  >
    <App />
  </Route>
  </div>
  </BrowserRouter>
  , document.getElementById('root'))