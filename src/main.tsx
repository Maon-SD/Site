import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './styles/globals.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {import.meta.env.PROD ? (
      <HashRouter>
        <App />
      </HashRouter>
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </StrictMode>
);

// Disable browser scroll restoration so route navigation always starts at top
// unless we explicitly scroll to a hash.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

