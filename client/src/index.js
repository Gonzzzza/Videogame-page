import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './Components/redux/store';
import './index.css'

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)


