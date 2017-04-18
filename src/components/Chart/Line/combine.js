/**
* @Author: eason
* @Date:   2017-04-05T15:16:55+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-18T14:32:42+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

function formatter(params) {
  return `
    ${
      params.map(({
        color,
        seriesName,
        value,
      }) => `
        <span style="
          background-color: ${color};
          display: inline-block;
          width: 6px;
          height: 6px;
          line-height:
          6px;border-radius: 3px;">
        </span>
        ${seriesName}: ${value}<br />
      `).join('')
    }
  `;
}

function seriesCreator(series) {
  return series.map(e => ({
    type: 'line',
    symbol: 'circle',
    smooth: true,
    ...e,
  }));
}

export default function (option, data) {
  const { tooltip, xAxis } = option;
  const { labels, series, colors } = data;
  return {
    ...option,
    ...(colors && Array.isArray(colors) ? { color: colors } : {}),
    tooltip: {
      ...tooltip,
      formatter,
    },
    xAxis: {
      ...xAxis,
      data: labels,
    },
    series: seriesCreator(series),
  };
}
