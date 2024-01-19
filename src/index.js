import React, { Suspense } from 'react';
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { hydrate, render } from "react-dom";
import { ApplicationContextProvider } from "./application-context";
import './root.css';
import './index.css';
import Loader from './loader/Loader';

const appElement = (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <ApplicationContextProvider>
        <Router />
      </ApplicationContextProvider>
    </Suspense>
  </BrowserRouter>
)

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  console.log('in hyderate')
  hydrate(appElement, rootElement);
} else {
  console.log('in render')
  render(appElement, rootElement);
}