/**
* @Author: eason
* @Date:   2016-12-15T13:47:54+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T05:02:17+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React from 'react';
import { Router } from 'dva/router';

function RouterConfig({ history }) {
  const routes = [
    {
      name: 'app',
      path: '/',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/App'));
        }, 'app');
      },
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, { component: require('./routes/AdminApp') });
        });
      },
      childRoutes: [
        {
          name: 'login',
          path: 'login',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/Login'));
            }, 'login');
          },
        },
        {
          name: 'admin',
          path: 'admin',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/AdminApp'));
            }, 'admin');
          },
          getIndexRoute(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, { component: require('./routes/User') });
            }, 'admin-user');
          },
        },
      ],
    },
  ];
  return (
    <Router history={history} routes={routes} />
  );
}

export default RouterConfig;
