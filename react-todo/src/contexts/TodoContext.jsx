import React, { createContext, useContext } from 'react';

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const {
    addInputValue,
    handleAddTodo,
    handleChangeSearchKeyword,
    handleDeleteTodo,
    onChangeAddInputValue,
    searchKeyword,
    showTodoList,
  } = useTodos();
  return (
    <TodosContext.Provider
      value={{
        addInputValue,
        handleAddTodo,
        handleChangeSearchKeyword,
        handleDeleteTodo,
        onChangeAddInputValue,
        searchKeyword,
        showTodoList,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodos = () => useContext(TodosContext);
