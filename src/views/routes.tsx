import React from 'react';

import {
  IndexView,
  Home as HomeView,
  Mission as BenefitsView

  
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

  {
    path: '/Mission',
    renderer: (params = {}): JSX.Element => <BenefitsView {...params} />,
  },
  
];

export default routes;
