'use client';

import styles from './styles.module.css';
import { useTodoTemplate } from './useTodoTemplate';
import { useTodosContext } from '../../../contexts/TodoContext';
import { InputForm } from '../../atoms/InputForm';
import { BaseLayout } from '../../organisms/BaseLayout';
import { TodoList } from '../../organisms/TodoList';

export const TodoTemplate = () => {
  const { originTodoList, handleDeleteTodo } = useTodosContext();

  const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] =
    useTodoTemplate({ originTodoList });

  return (
    <BaseLayout title={'TodoList'}>
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm
            value={searchKeyword}
            placeholder={'Search Keyword'}
            onChange={handleChangeSearchKeyword}
          />
        </div>
        <div className={styles.area}>
          {showTodoList.length > 0 && (
            <TodoList
              todoList={showTodoList}
              handleDeleteTodo={handleDeleteTodo}
            />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
