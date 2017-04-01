/**
* @Author: eason
* @Date:   2017-03-27T10:55:28+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-01T11:33:20+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

export default {
  namespace: 'admin',
  state: {
    siderFold: false,

    menus: [
      {
        key: 'dashboard',
        icon: 'laptop',
        label: 'Dashboard',
        path: 'admin/dashboard',
      },
      {
        key: 'chart',
        icon: 'area-chart',
        label: 'Chart',
        path: 'admin/chart',
      },
    ],
  },
  reducers: {
    'sider/switch'(state) {
      return { ...state, siderFold: !state.siderFold };
    },
  },
  effects: {},
  subscriptions: {},
};
