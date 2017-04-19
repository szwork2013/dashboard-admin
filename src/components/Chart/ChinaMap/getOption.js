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
    top: 0,
    bottom: 0,
    ...e,
  }));
}

function getMax(series) {
  const maxs = [];
  series.forEach((e) => {
    let max = 0;
    e.data.forEach((d) => {
      max = d.value > max ? d.value : max;
    });
    maxs.push(max);
  });
  return Math.max.apply(null, maxs);
}

function formatterCreator(series) {
  return (params) => {
    let res = `${params.name}<br/>`;
    for (let i = 0; i < series.length; i += 1) {
      res += series[i].name;
      for (let j = 0; j < series[i].data.length; j += 1) {
        if (series[i].data[j].name === params.name) {
          res += ` : ${series[i].data[j].value}</br>`;
        }
      }
    }
    return res;
  };
}

export default function (option, data) {
  const { series } = data;
  return {
    ...option,
    visualMap: {
      ...option.visualMap,
      max: getMax(series),
    },
    tooltip: {
      ...option.tooltip,
      formatter: formatterCreator(series),
    },
    series: seriesCreator(series),
  };
}
