/**
* @Author: eason
* @Date:   2017-04-18T14:01:15+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-18T14:09:45+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/
/* eslint-disable */
import echarts from 'echarts';

const themeMeta = [
  {
    name: 'dark',
    theme: require('./dark.json'),
  },
  {
    name: 'bright',
    theme: require('./bright.json'),
  },
];

export default function createTheme() {
  themeMeta.map(
    ({ name, theme }) => echarts.registerTheme(name, theme),
  );
}
