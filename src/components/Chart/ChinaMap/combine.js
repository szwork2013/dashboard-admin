/**
* @Author: eason
* @Date:   2017-04-05T15:16:55+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-09T14:26:38+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

function seriesCreator(series) {
  return series.map(e => ({
    type: 'map',
    map: 'china',
    ...e,
  }));
}

export default function (option, data) {
  const { series } = data;
  return {
    ...option,
    series: seriesCreator(series),
  };
}
