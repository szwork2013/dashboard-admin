/**
* @Author: eason
* @Date:   2017-03-27T04:43:44+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T11:03:53+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

export default {
  namespace: 'auth',
  state: {
    authorization: null,
    auth: false,
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload, auth: true };
    },
    remove(state, { payload }) {
      return { ...state, ...payload, auth: false };
    },
  },
  effects: {
    *authorize({ payload: { username, password } }, { put }) { // eslint-disable-line
      if (!(username === 'eason' && password === 'zaeason')) {
        throw new Error('用户名或密码错误!');
      }
      yield put({ type: 'save', payload: { username } });
    },
    *unauthorize(action, { put }) {
      yield put({ type: 'remove', payload: { username: null } });
    },
  },
  subscriptions: {},
};
