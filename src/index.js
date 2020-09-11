import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css'
//import PrimeraApp from './PrimeraApp';


const divRoot = document.querySelector('#app');

//ReactDOM.render(<PrimeraApp saludo='Hola, soy dairo' />, divRoot)

ReactDOM.render(<CounterApp />, divRoot)