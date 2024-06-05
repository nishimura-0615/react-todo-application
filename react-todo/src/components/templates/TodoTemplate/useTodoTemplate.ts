import { useCallback, useMemo, useState } from 'react';
import { EventType } from '../../../interfaces/Event';
import { TodoType } from '../../../interfaces/Todo';

type Params = {
  originTodoList: Array<TodoType>;
};

type StatesType = {
  searchKeyword: string;
  showTodoList: Array<TodoType>;
};

type ActionsType = {
  handleChangeSearchKeyword: EventType['onChangeInput'];
};

export const useTodoTemplate = ({ originTodoList }: Params) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const showTodoList = useMemo(() => {
    const regexp = new RegExp('^' + searchKeyword, 'i');
    return originTodoList.filter((todo) => {
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  const handleChangeSearchKeyword: EventType['onChangeInput'] = useCallback(
    (e) => setSearchKeyword(e.target.value),
    [],
  );

  const states: StatesType = {
    searchKeyword,
    showTodoList,
  };
  const actions: ActionsType = {
    handleChangeSearchKeyword,
  };

  return [states, actions] as const;
};
