export const BASE_PATH = '';

export const NAVIGATION_LIST = {
  CREATE: '/create',
  DETAIL: '/detail/:id',
  EDIT: '/edit/:id',
  TOP: '/',
};

export const NAVIGATION_PATH = {
  CREATE: '/create',
  DETAIL: (id) => `/detail/${id}`,
  EDIT: (id) => `/edit/${id}`,
  TOP: '/',
};
