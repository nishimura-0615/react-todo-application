import React, { createContext, useContext } from 'react';
import useTodos from '../hooks/useTodos';

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const {
    addTodo,
    handleChangeSearchKeyword,
    handleDeleteTodo,
    onChangeAddInputValue,
    originTodoList,
    searchKeyword,
    showTodoList,
    updateTodo,
  } = useTodos();

  return (
    <TodosContext.Provider
      value={{
        addTodo,
        handleChangeSearchKeyword,
        handleDeleteTodo,
        onChangeAddInputValue,
        originTodoList,
        searchKeyword,
        showTodoList,
        updateTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodosContext = () => useContext(TodosContext);
