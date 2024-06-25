import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './components/router'
import './assets/styles/App.scss';
import App from './components/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={Router}>
    <App />
  </RouterProvider>,
  </React.StrictMode>
);

