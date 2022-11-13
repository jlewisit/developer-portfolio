import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// To measure performance pass function: {reportWebVitals(console.log)} or send to analytics endpoint
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
// If you want to start measuring performan