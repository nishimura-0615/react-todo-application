import React, { createContext, useContext } from 'react';
import useTodos from '../hooks/useTodos';

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const {
    addTodo,
    addInputValue,
    handleChangeSearchKeyword,
    handleDeleteTodo,
    inputTitle,
    inputContent,
    onChangeAddInputValue,
    originTodoList,
    searchKeyword,
    showTodoList,
    updateTodo,
  } = useTodos();

  return (
    <TodosContext.Provider
      value={{
        addInputValue,
        addTodo,
        handleChangeSearchKeyword,
        handleDeleteTodo,
        inputContent,
        inputTitle,
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
