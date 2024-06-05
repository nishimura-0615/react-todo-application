import { createContext, FC, ReactNode, useContext } from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoType } from '../interfaces/Todo';

type Props = {
  children: ReactNode;
};

interface ContextInterface {
  originTodoList: Array<TodoType>;
  addTodo: (title: string, content: string) => void;
  updateTodo: (id: number, title: string, content: string) => void;
  handleDeleteTodo: (targetId: number, targetTitle: string) => void;
}

const TodoContext = createContext({} as ContextInterface);

export const TodosProvider: FC<Props> = ({ children }) => {
  const { addTodo, handleDeleteTodo, originTodoList, updateTodo } = useTodos();

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        handleDeleteTodo,
        originTodoList,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodosContext = () => useContext(TodoContext);
