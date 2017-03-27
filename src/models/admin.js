/**
* @Author: eason
* @Date:   2017-03-27T10:55:28+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T10:56:52+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

export default {
  namespace: 'admin',
  state: {
    siderFold: false,
  },
  reducers: {
    'sider/switch'(state) {
      return { ...state, siderFold: !state.siderFold };
    },
  },
  effects: {},
  subscriptions: {},
};
