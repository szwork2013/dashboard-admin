/**
* @Author: eason
* @Date:   2017-04-05T15:16:55+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-09T12:23:51+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

function seriesCreator(series) {
  return series.map(e => ({
    type: 'pie',
    radius: ['58%', '65%'],
    label: {
      normal: {
        show: true,
        formatter: '{d}%({c})\n\n{b}',
      },
      // emphasis: {
      //   show: false,
      //   textStyle: {
      //     fontSize: '16',
      //     fontWeight: 'bold',
      //   },
      // },
    },
    // labelLine: {
    //   normal: {
    //     show: false,
    //   },
    // },
    ...e,
  }));
}

export default function (option, data) {
  const { colors, text, subtext, series } = data;
  // const sum = series[0].data.reduce((v, e) => (e.value + v), 0);
  // const ldata = series[0].data.map(({ name, value }) => ({
  //   name, value, percent: `${parseInt((value / sum) * 100, 10)}%`,
  // }));

  return {
    ...option,
    colors: colors && Array.isArray(colors) ? colors : option.colors,
    title: {
      ...option.title,
      text,
      subtext,
    },
    // legend: {
    //   ...option.legend,
    //   data: series[0].data.map(e => ({ name: e.name, icon: 'pin' })),
    //   formatter: function (param) {
    //     const { percent, name, value } = ldata.filter(e => e.name === param).pop();
    //     return `${percent} ${name} ${value}次`;
    //   },
    // },
    series: seriesCreator(series),
  };
}
