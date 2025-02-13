import React, { useId, useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import PagerContainer from './components/PagerContainer';
import CheckBoxGroup from './components/common/CheckBoxGroup';
import Test from './components/taks/Test';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Test />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
