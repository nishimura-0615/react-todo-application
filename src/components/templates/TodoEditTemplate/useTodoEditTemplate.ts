import { useParams, useRouter } from 'next/navigation';
import { useMemo, useState, useCallback } from 'react';
import { NAVIGATION_PATH } from '../../../constants/navigation';
import { EventType } from '../../../interfaces/Event';
import { TodoType } from '../../../interfaces/Todo';

type Params = {
  originTodoList: Array<TodoType>;
  updateTodo: (id: number, title: string, content: string) => void;
};

type StatesType = {
  todo: TodoType | undefined;
  inputTitle: string;
  inputContent: string;
};

type ActionsType = {
  handleChangeTitle: EventType['onChangeInput'];
  handleChangeContent: EventType['onChangeTextArea'];
  handleUpdateTodo: EventType['onSubmit'];
};

export const useTodoEditTemplate = ({ originTodoList, updateTodo }: Params) => {
  const navigate = useRouter();
  const { id } = useParams<{ id: string }>();
  const todo = useMemo(
    () => originTodoList.find((todo) => String(todo.id) === id),
    [id, originTodoList],
  );

  const [inputTitle, setInputTitle] = useState(todo?.title || '');
  const [inputContent, setInputContent] = useState(todo?.content || '');

  const handleChangeTitle: EventType['onChangeInput'] = useCallback(
    (e) => setInputTitle(e.target.value),
    [],
  );

  const handleChangeContent: EventType['onChangeTextArea'] = useCallback(
    (e) => setInputContent(e.target.value),
    [],
  );

  const handleUpdateTodo: EventType['onSubmit'] = useCallback(
    (e) => {
      e.preventDefault();
      if (!!todo?.id && inputTitle !== '' && inputContent !== '') {
        updateTodo(todo.id, inputTitle, inputContent);
        navigate.push(NAVIGATION_PATH.TOP);
      }
    },
    [navigate, todo?.id, inputTitle, inputContent, updateTodo],
  );

  const states: StatesType = {
    todo,
    inputTitle,
    inputContent,
  };

  const actions: ActionsType = {
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  };

  return [states, actions] as const;
};
