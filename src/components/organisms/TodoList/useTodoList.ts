import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { NAVIGATION_PATH } from '../../../constants/navigation';

type ActionType = {
  handleMoveDetailPage: (id: number) => void;
  handleMoveEditPage: (id: number) => void;
};

export const useTodoList = () => {
  const navigate = useRouter();

  const handleMoveDetailPage = useCallback(
    (id: number) => navigate.push(`${NAVIGATION_PATH.DETAIL}${id}`),
    [navigate],
  );

  const handleMoveEditPage = useCallback(
    (id: number) => navigate.push(`${NAVIGATION_PATH.EDIT}${id}`),
    [navigate],
  );

  const actions: ActionType = {
    handleMoveDetailPage,
    handleMoveEditPage,
  };

  return [actions] as const;
};
