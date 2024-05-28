export const BASE_PATH = '';

export const NAVIGATION_LIST = {
  TOP: '/',
  DETAIL: '/detail/:id',
  EDIT: '/edit/:id',
  CREATE: '/create',
};

export const NAVIGATION_PATH = {
  TOP: '/',
  DETAIL: (id) => `/detail/${id}`,
  EDIT: (id) => `/edit/${id}`,
  CREATE: '/create',
};
