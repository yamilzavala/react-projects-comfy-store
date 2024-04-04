import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { store } from './store/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
      <Provider store={store}>
            <App /> 
            <ToastContainer position='top-center'/>
      </Provider>
);
