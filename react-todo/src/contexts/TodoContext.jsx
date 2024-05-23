import React, { createContext, useContext } from 'react';
import useTodos from '../hooks/useTodos';

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const todos = useTodos();
  return (
    <TodosContext.Provider value={todos}>{children}</TodosContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodosContext = () => useContext(TodosContext);
