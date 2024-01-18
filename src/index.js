import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import SuspenseRouter from "./SuspenseRouter";
// import { hydrateRoot, createRoot } from 'react-dom/client';
import { hydrate, render } from "react-dom";

const StrictApp = ()=>(
  <React.StrictMode>
    <Suspense fallback={<div/>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
)

const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  console.log('<< in hyderation')
  hydrate(<StrictApp />, rootElement);
} else {
  console.log('<< in render')

  // const root = createRoot(rootElement);
  render(<StrictApp />, rootElement);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
