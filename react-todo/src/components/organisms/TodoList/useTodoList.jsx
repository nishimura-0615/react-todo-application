import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../../../constants/navigation';

export const useTodoList = () => {
  const navigate = useNavigate();

  const handleMoveDetailPage = useCallback(
    (id) => navigate(`${NAVIGATION_PATH.DETAIL(id)}`),
    [navigate],
  );

  const handleMoveEditPage = useCallback(
    (id) => navigate(`${NAVIGATION_PATH.EDIT(id)}`),
    [navigate],
  );

  return {
    handleMoveDetailPage,
    handleMoveEditPage,
  };
};
