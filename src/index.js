import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './routes/home';
import Component from './routes/component';
import Howto from './routes/howto';
import Support from './routes/support';
import SupportFrench from './routes/supportfrench';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/SEG3125-Project2/" element={<Home />} />

      <Route path="/SEG3125-Project2/component/cpu" element={<Component type='CPU' filter='none'/>} />
      <Route path="/SEG3125-Project2/component/cpu_amd" element={<Component type='CPU' filter='amd'/>} />
      <Route path="/SEG3125-Project2/component/cpu_intel" element={<Component type='CPU' filter='intel'/>} />
      
      <Route path="/SEG3125-Project2/component/gpu" element={<Component type='GPU' filter='none'/>} />
      <Route path="/SEG3125-Project2/component/gpu_amd" element={<Component type='GPU' filter='amd'/>} />
      <Route path="/SEG3125-Project2/component/gpu_nvidia" element={<Component type='GPU' filter='nvidia'/>} />

      <Route path="/SEG3125-Project2/howto" element={<Howto />} />
      <Route path="/SEG3125-Project2/support" element={<Support />} />
      <Route path="/SEG3125-Project2/supportfr" element={<SupportFrench />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
