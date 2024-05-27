import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { TodosProvider } from './contexts/TodoContext';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <TodosProvider>
        <RouterProvider router={router} />
      </TodosProvider>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}
