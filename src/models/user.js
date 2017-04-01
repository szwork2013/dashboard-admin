/**
* @Author: eason
* @Date:   2017-03-27T02:13:35+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-29T12:09:42+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/
import { delay } from 'dva/saga';
import once from 'once';
import store from 'store';

import * as services from '../services/user';

export default {
  namespace: 'user',
  state: {
    visible: false,

    // url: JSON.parse(localStorage.getItem('ald') || '{}').url, // eslint-disable-line
    url: store.get('ald') ? store.get('ald').url : null,

    // columns: JSON.parse(localStorage.getItem('ald') || '{}').columns, // eslint-disable-line
    columns: store.get('ald') ? store.get('ald').columns : [],

    // columns: [{
    //   title: 'ID',
    //   dataIndex: 'id',
    //   key: 'id',
    // }, {
    //   title: '姓名',
    //   dataIndex: 'name',
    //   key: 'name',
    // }, {
    //   title: 'Email',
    //   dataIndex: 'email',
    //   key: 'email',
    // }, {
    //   title: '联系电话',
    //   dataIndex: 'phone',
    //   key: 'phone',
    // }, {
    //   title: '公司',
    //   dataIndex: 'company',
    //   key: 'company',
    // }, {
    //   title: '备注',
    //   dataIndex: 'content',
    //   key: 'content',
    // }, {
    //   title: '创建时间',
    //   dataIndex: 'createdAt',
    //   key: 'createdAt',
    // }],

    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      pageSize: 10,
      total: null,
    },

    data: [],
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    'save/pagination'(state, { payload }) {
      return { ...state, pagination: { ...state.pagination, current: payload } };
    },
    'save/settings'(state, { payload: { url, columns } }) { // eslint-disable-line
      localStorage.setItem('ald', JSON.stringify({ url, columns })); // eslint-disable-line
      return { ...state, url, columns, visible: false };
    },
    'modal/show'(state) { // eslint-disable-line
      return { ...state, visible: true };
    },
    'modal/hide'(state) { // eslint-disable-line
      return { ...state, visible: false };
    },
  },
  effects: {
    *'sync/save/settings'({ payload }, { select, race, call, put }) { // eslint-disable-line
      yield put({ type: 'save/settings', payload });
      yield put({ type: 'sync/list' });
    },
    *'sync/list'({ payload }, { select, race, call, put }) { // eslint-disable-line
      const pageIndex = payload || 1;
      const { url, columns, data: oData, pagination } = yield select(({ user }) => user);
      // const keys = oData.map(e => e.key);
      const offset = (pageIndex - 1) * pagination.pageSize;
      const limit = pagination.pageSize;

      const lData = oData.slice(offset, offset + limit);

      if (lData.length === limit && lData.every(e => e !== undefined)) {
        return yield put({ type: 'save/pagination', payload: pageIndex });
      }

      if (!url || !columns) {
        throw new Error('请先做好配置!');
      }

      const { data, timeout } = yield race({
        data: call(services.fetchList, url, {
          offset,
          limit,
        }),
        timeout: call(delay, 3000),
      });

      if (timeout) {
        throw new Error('网络小差啦!');
      }

      yield put({
        type: 'save',
        payload: {
          pagination: {
            ...pagination,
            ...data.pagination,
          },
          // data: oData.concat(data.data.filter(d => keys.indexOf(d.key) === -1)),
          data: oData.merge(data.data),
        },
      });
    },
    // *'sync/next'(action, { select, race, call, put }) {
    //
    // },
    // *'sync/prev'(action, { select, race, call, put }) {
    //
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      const ff = () => dispatch({ type: 'sync/list' });
      history.listen(({ pathname }) => {
        if (['/admin', '/admin/dashboard'].includes(pathname)) {
          once(ff)();
        }
      });
    },
  },
};
