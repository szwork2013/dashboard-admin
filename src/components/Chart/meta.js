/**
* @Author: eason
* @Date:   2017-04-05T17:44:15+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-18T14:32:55+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/
/* eslint-disable */
import assert from 'assert';
import createTheme from './theme';

const CHARTS = [
  {
    key: 'line',
    name: 'line',
    icon: 'line-chart',
    model: require('./Line'),
  },
  {
    key: 'bar',
    name: 'bar',
    icon: 'bar-chart',
    model: require('./Bar'),
  },
  {
    key: 'pie',
    name: 'pie',
    icon: 'pie-chart',
    model: require('./Pie'),
  },
  {
    key: 'ring',
    name: 'ring',
    icon: 'pie-chart',
    model: require('./Ring'),
  },
  {
    key: 'sector',
    name: 'sector',
    icon: 'area-chart',
    model: require('./Sector'),
  },
  {
    key: 'bar-top5',
    name: 'bar-top5',
    icon: 'bar-chart',
    model: require('./BarTop5'),
  },
  {
    key: 'bar-top10',
    name: 'bar-top10',
    icon: 'bar-chart',
    model: require('./BarTop10'),
  },
  {
    key: 'china-map',
    name: 'china-map',
    icon: 'map-chart',
    model: require('./ChinaMap'),
  },
];

export function getChart({ type, data } = {}) {
  const chart = CHARTS.filter(e => e.key === type).pop();

  // assert(data.series !== undefined, 'Series is Required.');
  assert(chart !== undefined, 'Invalid Chart Type.');

  const { option, data: defaultData, combine, Chart } = chart.model;

  // assert(combine !== undefined, 'Function combine cannot be undefined');
  // assert(option !== undefined, 'Function combine cannot be undefined');

  return {
    title: data.title || defaultData.title,
    Chart,
    option: combine(option, data.series ? data : defaultData),
  };
}

createTheme();

export default CHARTS;
