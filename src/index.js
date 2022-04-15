import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
