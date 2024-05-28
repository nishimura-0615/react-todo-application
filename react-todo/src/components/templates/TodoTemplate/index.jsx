import React from 'react';
import { BaseLayout } from '../../organisms/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TodoList } from '../../organisms/TodoList';
import { useTodosContext } from '../../../contexts/TodoContext';
import styles from './styles.module.css';

export const TodoTemplate = () => {
  const {
    handleChangeSearchKeyword,
    handleDeleteTodo,
    searchKeyword,
    showTodoList,
  } = useTodosContext();

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
