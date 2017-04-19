/**
* @Author: eason
* @Date:   2017-04-05T17:44:15+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-19T16:34:43+08:00
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
    option: require('../Chart/Line/option'),
    data: require('../Chart/Line/data'),
    chart: require('../Chart/Line'),
  },
  {
    key: 'bar',
    name: 'bar',
    icon: 'bar-chart',
    option: require('../Chart/Bar/option'),
    data: require('../Chart/Bar/data'),
    chart: require('../Chart/Bar'),
  },
  {
    key: 'pie',
    name: 'pie',
    icon: 'pie-chart',
    option: require('../Chart/Pie/option'),
    data: require('../Chart/Pie/data'),
    chart: require('../Chart/Pie'),
  },
  {
    key: 'ring',
    name: 'ring',
    icon: 'pie-chart',
    option: require('../Chart/Ring/option'),
    data: require('../Chart/Ring/data'),
    chart: require('../Chart/Ring'),
  },
  {
    key: 'sector',
    name: 'sector',
    icon: 'area-chart',
    option: require('../Chart/Sector/option'),
    data: require('../Chart/Sector/data'),
    chart: require('../Chart/Sector'),
  },
  {
    key: 'bar-top5',
    name: 'bar-top5',
    icon: 'bar-chart',
    option: require('../Chart/BarTop5/option'),
    data: require('../Chart/BarTop5/data'),
    chart: require('../Chart/BarTop5'),
  },
  {
    key: 'bar-top10',
    name: 'bar-top10',
    icon: 'bar-chart',
    data: require('../Chart/BarTop10/data'),
    chart: require('../Chart/BarTop10'),
  },
  {
    key: 'china-map',
    name: 'china-map',
    icon: 'map-chart',
    option: require('../Chart/ChinaMap/option'),
    data: require('../Chart/ChinaMap/data'),
    chart: require('../Chart/ChinaMap'),
  },
];

export function getChart({ type } = {}) {
  const { chart, data } = CHARTS.filter(e => e.key === type).pop();
  chart.defaultProps.data = data;
  chart.defaultProps.title = data.title;

  assert(chart !== undefined, 'Invalid Chart Type.');

  return chart;
}

export function getInitialState(type) {
  const { option, data } = CHARTS.filter(e => e.key === type).pop();
  return { option, data };
}

createTheme();

export default CHARTS;
