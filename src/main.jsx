import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import Authenticate from './providers/Authenticate';
import router from './routes/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Authenticate>
        <RouterProvider router={router} />
      </Authenticate>
    </HelmetProvider>
  </React.StrictMode>
);
