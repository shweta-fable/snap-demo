import './App.css';
import { Routes, Route, } from "react-router-dom";
import Test from './Test.js';
import Mind from './Mind';
import { lazy, useEffect } from 'react';
import { startTransition } from 'react';
import { Suspense } from 'react';
const MindPreview = lazy(() => (import('./Mind.js')));
const TestPreview = lazy(() => (import('./Test')));

function App() {

  useEffect(()=>{
    console.log('mounted App')
    return ()=> console.log('unmounted App');
  },[])

  return (
    <div>
    <h1>Lazy Loading Example</h1>
    <Routes>
     
      <Route path="/products" element={
        // <Suspense fallback={<>...</>}>
          <MindPreview />
        // </Suspense>
      } />
       <Route path="/" element={
        // <Suspense fallback={<>...</>}>
          <TestPreview />
        // </Suspense>
      } />
    </Routes>
    </div>
  );
}

export default App;

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}