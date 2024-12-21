import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Assicurati che il percorso sia corretto

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
