/**
* @Author: eason
* @Date:   2017-04-14T00:12:27+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-14T01:12:29+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

export default function (option, data) {
  const { title, sum, series } = data;
  // const sum = series.reduce((last, { value }) => last + value, 0);
  return {
    title,
    series: series.map(e => ({ ...e, percent: `${(e.value / sum) * 100}%` })),
  };
}
