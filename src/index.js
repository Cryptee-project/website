// #region Import React
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
// #endregion
// #region Import Styles
import './styles/index.css';
// #endregion

const root = ReactDOM.createRoot(document.getElementById('root'));

// #region Render
root.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>
);
// #endregion