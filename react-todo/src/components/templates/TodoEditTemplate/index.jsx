import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { useTodosContext } from '../../../contexts/TodoContext';
import { CommonButton } from '../../atoms/CommonButton';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { BaseLayout } from '../../organisms/BaseLayout';

const useTodoEditTemplate = ({ originTodoList, updateTodo }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todo = useMemo(
    () => originTodoList.find((todo) => String(todo.id) === id),
    [id, originTodoList],
  );

  const [inputTitle, setInputTitle] = useState(todo?.title || '');
  const [inputContent, setInputContent] = useState(todo?.content || '');

  useEffect(() => {
    if (todo) {
      setInputTitle(todo.title);
      setInputContent(todo.content);
    }
  }, [todo]);

  const handleChangeTitle = useCallback(
    (e) => setInputTitle(e.target.value),
    [],
  );

  const handleChangeContent = useCallback(
    (e) => setInputContent(e.target.value),
    [],
  );

  const handleUpdateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (todo?.id && inputTitle !== '' && inputContent !== '') {
        updateTodo(todo.id, inputTitle, inputContent);
        navigate('/');
      }
    },
    [navigate, todo?.id, inputTitle, inputContent, updateTodo],
  );

  return {
    handleChangeContent,
    handleChangeTitle,
    handleUpdateTodo,
    inputContent,
    inputTitle,
    todo,
  };
};

export const TodoEditTemplate = () => {
  const { originTodoList, updateTodo } = useTodosContext();

  const {
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
    inputContent,
    inputTitle,
    todo,
  } = useTodoEditTemplate({
    originTodoList,
    updateTodo,
  });

  return (
    <BaseLayout title={'TodoEdit'}>
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
          <div className={styles.area}>
            <InputForm
              value={inputTitle}
              placeholder={'Title'}
              onChange={handleChangeTitle}
            />
          </div>
          <div className={styles.area}>
            <TextArea
              value={inputContent}
              placeholder={'Content'}
              onChange={handleChangeContent}
            />
          </div>
          <div className={styles.area}>
            <CommonButton type="submit" title="Edit Todo" />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};
