import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';

const linkFonts = document.createElement('link');
linkFonts.rel = 'stylesheet';
linkFonts.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Montserrat:ital,wght@0,100..900&display=swap';
document.head.appendChild(linkFonts);

document.title = "Galeria de Animes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);