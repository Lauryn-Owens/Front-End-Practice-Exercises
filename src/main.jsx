import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {ThemeProvider } from './exerciseFour/toggleProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      /**
       * provide app the contexts
       */
    }
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
)
