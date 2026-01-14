import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './ui/App';
import './style.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Missing root element');
}

createRoot(rootEl).render(<App />);
