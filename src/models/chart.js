/**
* @Author: eason
* @Date:   2017-04-01T13:55:47+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-01T22:01:11+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/
import uuid from 'uuid/v4';

export default {
  namespace: 'chart',
  state: {
    editable: false,
    selectedId: null,
    layout: [
      { i: 'a', x: 0, y: 0, w: 6, h: 8, isResizable: true },
      { i: 'b', x: 6, y: 0, w: 6, h: 8 },
      { i: 'c', x: 0, y: 8, w: 6, h: 8 },
    ],
  },
  reducers: {
    'edit/switch'(state) {
      return { ...state, editable: !state.editable, selectedId: null };
    },
    'layout/select'(state, { payload }) {
      return { ...state, selectedId: payload };
    },
    'layout/change'(state, { payload }) {
      return { ...state, layout: payload };
    },
    'layout/add'(state) {
      const layout = { i: uuid(), x: 0, y: 0, w: 6, h: 6 };
      return { ...state, layout: [layout, ...state.layout], selectedId: layout.i };
    },
    'layout/remove'(state, { payload: key }) {
      return { ...state, layout: state.layout.filter(e => e.i !== key), selectedId: null };
    },
  },
  effects: {},
  subscriptions: {},
};
