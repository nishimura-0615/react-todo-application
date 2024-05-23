import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoTemplate } from './components/templates/TodoTemplate';
import { TodosProvider } from './contexts/TodoContext';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <TodosProvider>
        <TodoTemplate />
      </TodosProvider>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}
