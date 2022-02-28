import React from 'react';

import {
  Service as ServiceView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from 'views';

import {
  Advantages as AdvantagesView,
} from 'views/Service/components/';


const routes = [
  {
    path: '/',
    renderer: (params = {}): JSX.Element => <ServiceView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}): JSX.Element => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}): JSX.Element => <NotFoundCoverView {...params} />,
  },

  {
    path: '/',
    renderer: (params = {}): JSX.Element => <AdvantagesView {...params} />,
  },
];

export default routes;
