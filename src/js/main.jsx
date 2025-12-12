import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';
let counter = 0;
setInterval(function () {
  // Generar mi aplicación de React
  ReactDOM.createRoot(document.getElementById("root")).render(<SecondsCounter number={String(counter).padStart(6, "0")} />
  );
  counter++;
  console.log(counter);
}, 1000);
