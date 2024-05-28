import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodosContext } from '../../../contexts/TodoContext';
import { BaseLayout } from '../../organisms/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { CommonButton } from '../../atoms/CommonButton';
import { NAVIGATION_PATH } from '../../../constants/navigation';
import styles from './styles.module.css';

const useTodoCreateTemplate = ({ addTodo }) => {
  const navigate = useNavigate();

  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

  const handleChangeTitle = useCallback(
    (e) => setInputTitle(e.target.value),
    [],
  );

  const handleChangeContent = useCallback(
    (e) => setInputContent(e.target.value),
    [],
  );

  const handleCreateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (inputTitle !== '' && inputContent !== '') {
        handleAddTodo(inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, navigate],
  );

  return {
    inputTitle,
    inputContent,
    handleChangeTitle,
    handleChangeContent,
    handleCreateTodo,
  };
};

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodosContext();
  const {
    inputContent,
    inputTitle,
    handleChangeContent,
    handleChangeTitle,
    handleCreateTodo,
  } = useTodoCreateTemplate({ addTodo });

  return (
    <BaseLayout title={'Create Todo'}>
      <form className={styles.container} onSubmit={handleCreateTodo}>
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
          <CommonButton type="submit" title="Create Todo" />
        </div>
      </form>
    </BaseLayout>
  );
};
