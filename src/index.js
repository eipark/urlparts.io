import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import Companies from './Companies';
import Company from './Company';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import '@fontsource/inter/variable.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="companies" element={<Companies />}>
          <Route path=":companyId" element={<Company />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
