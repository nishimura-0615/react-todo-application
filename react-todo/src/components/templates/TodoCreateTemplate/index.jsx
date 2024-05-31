import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { NAVIGATION_PATH } from '../../../constants/navigation';
import { useTodosContext } from '../../../contexts/TodoContext';
import { CommonButton } from '../../atoms/CommonButton';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { BaseLayout } from '../../organisms/BaseLayout';

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
        addTodo(inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputContent, inputTitle, navigate],
  );

  return {
    handleChangeContent,
    handleChangeTitle,
    handleCreateTodo,
    inputContent,
    inputTitle,
  };
};

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodosContext();
  const {
    handleChangeContent,
    handleChangeTitle,
    handleCreateTodo,
    inputContent,
    inputTitle,
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
