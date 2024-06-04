import { createBrowserRouter } from 'react-router-dom';
import { NAVIGATION_LIST } from '../constants/navigation';
import { TodoCreatePage } from '../pages/create';
import { TodoDetailPage } from '../pages/detail';
import { TodoEditPage } from '../pages/edit';
import { TodoPage } from '../pages/todo';

export const router = createBrowserRouter([
  {
    path: NAVIGATION_LIST.TOP,
    element: <TodoPage />,
  },
  {
    path: NAVIGATION_LIST.DETAIL,
    element: <TodoDetailPage />,
  },
  {
    path: NAVIGATION_LIST.CREATE,
    element: <TodoCreatePage />,
  },
  {
    path: NAVIGATION_LIST.EDIT,
    element: <TodoEditPage />,
  },
]);
