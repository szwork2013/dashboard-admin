/**
* @Author: eason
* @Date:   2017-04-05T17:44:15+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-06T14:33:55+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/
import assert from 'assert';

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
    key: 'sector',
    name: 'sector',
    icon: 'area-chart',
    model: require('./Sector'),
  },
];

export function getChart({ type, data } = {}) {
  const chart = CHARTS.filter(e => e.key === type).pop();

  // assert(data.series !== undefined, 'Series is Required.');
  assert(chart !== undefined, 'Invalid Chart Type.');

  const { option, data: defaultData, combine } = chart.model;

  // assert(combine !== undefined, 'Function combine cannot be undefined');
  // assert(option !== undefined, 'Function combine cannot be undefined');

  return combine(option, data.series ? data : defaultData);
}


export default CHARTS;
