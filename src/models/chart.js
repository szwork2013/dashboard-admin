/**
* @Author: eason
* @Date:   2017-04-01T13:55:47+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-06T14:43:54+08:00
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
      { i: 'a', x: 0, y: 0, w: 6, h: 8 },
      { i: 'b', x: 6, y: 0, w: 6, h: 8 },
      { i: 'c', x: 0, y: 8, w: 6, h: 8 },
      { i: 'd', x: 6, y: 8, w: 6, h: 8 },
    ],
    charts: [
      {
        key: 'a',
        type: 'line',
        title: 'HHH',
      },
      {
        key: 'b',
        type: 'bar',
        title: 'YYY',
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        series: [
          {
            name: '最高气温',
            data: [11, 11, 15, 13, 12, 13, 10],
          },
        ],
      },
      {
        key: 'c',
        type: 'pie',
        title: 'ZZZ',
        series: [
          {
            name: '访问来源',
            type: 'pie',
            data: [
              { value: 335, name: '直达' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1048, name: '百度' },
              { value: 251, name: '谷歌' },
              { value: 147, name: '必应' },
              { value: 102, name: '其他' },
            ],
          },
        ],
      },
    ],
  },
  reducers: {
    'edit/switch'(state) {
      return { ...state, editable: !state.editable, selectedId: null };
    },
    // layout
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
    // chart
    'achart/select'(state, { payload: { key, type } }) {
      const { charts } = state;
      const keys = charts.map(e => e.key);

      const index = keys.indexOf(key);
      const chart = index === -1 ? { key, type } : { ...charts[index], type };

      return {
        ...state,
        charts: [
          ...charts.slice(0, index),
          chart,
          ...charts.slice(index + 1),
        ],
      };
    },
    'achart/change'(state, { payload: { key, type } }) {
      return {
        ...state,
        charts: state.charts.map(e => (e.key === key ? { ...e, type } : e)),
      };
    },
    'achart/remove'(state, { payload: key }) {
      return { ...state,
        charts: state.charts.map(e => {
          if (e.key === key) {
            return {
              ...e,
              type: null,
            };
          }
          return e;
        })
      };
    },
  },
  effects: {},
  subscriptions: {},
};
