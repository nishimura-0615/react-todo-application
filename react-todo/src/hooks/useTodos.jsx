import { useCallback, useMemo, useState } from 'react';
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../constants/data';

export const useTodos = () => {
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [addInputValue, setAddInputValue] = useState('');
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  const showTodoList = useMemo(() => {
    const regexp = new RegExp('^' + searchKeyword, 'i');
    return originTodoList.filter((todo) => {
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  const handleChangeSearchKeyword = useCallback(
    (e) => setSearchKeyword(e.target.value),
    [],
  );

  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);

  const addTodo = useCallback(
    (title, content) => {
      const nextUniqueId = uniqueId + 1;
      const newTodo = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: title,
          content: content,
        },
      ];
      setOriginTodoList(newTodo);
      setUniqueId(nextUniqueId);
    },
    [originTodoList, uniqueId],
  );

  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId);
      setOriginTodoList(newTodoList);
    }
  };
  const updateTodo = useCallback(
    (id, title, content) => {
      const updatedTodoList = originTodoList.map((todo) => {
        if (id === todo.id) {
          return {
            id: todo.id,
            title: title,
            content: content,
          };
        }
        return todo;
      });
      setOriginTodoList(updatedTodoList);
    },
    [originTodoList],
  );

  return {
    addInputValue,
    addTodo,
    handleChangeSearchKeyword,
    handleDeleteTodo,
    onChangeAddInputValue,
    originTodoList,
    searchKeyword,
    showTodoList,
    updateTodo,
  };
};

export default useTodos;
