import React from 'react';
import { TodoProvider } from './context/TodoContext';
import { TodoTemplate } from '../components/templates/TodoTemplate';

export const TodoPage = () => {
  return (
    <TodoProvider>
      <TodoTemplate />
    </TodoProvider>
  );
};
