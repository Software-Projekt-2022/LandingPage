import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './index.css';
import App from './App';
import Login from './components/Login';
import Registration from './components/Registration';
import { Toaster } from 'react-hot-toast';
import { SocketContext, socket } from './context/socket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <div>
        <Toaster/>
      </div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/home" element={<App />}/>
          <Route path="/" element={<App />}/>
        </Routes>
      </Router>
    </SocketContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
