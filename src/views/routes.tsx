import React from 'react';

import {
  IndexView,
  Home as HomeView,

  
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}): JSX.Element => <IndexView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}): JSX.Element => <HomeView {...params} />,
  },
  
];

export default routes;
