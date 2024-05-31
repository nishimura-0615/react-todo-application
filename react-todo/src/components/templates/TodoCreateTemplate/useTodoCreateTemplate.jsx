import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../../../constants/navigation';

export const useTodoCreateTemplate = ({ addTodo }) => {
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
