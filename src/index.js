import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Hero from "./components/Hero";
import Team2 from "./components/Team2";
import Banner from "./components/Banner";

//import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Proyectos from './components/Proyectos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner/>
    <Hero />
    <Team2 />
    <Proyectos />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();