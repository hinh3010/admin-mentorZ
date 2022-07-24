import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
// import { history } from 'history'
import store from './redux/store'
import 'antd/dist/antd.css';
import './main.scss';

import * as serviceWorker from './serviceWorker';

import App from './App';
import { BrowserRouter } from 'react-router-dom';


function Root() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();
