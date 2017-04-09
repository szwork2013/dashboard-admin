/**
* @Author: eason
* @Date:   2017-04-08T14:13:56+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-09T12:28:31+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

module.exports = {
  color: ['#7A57E6', '#6ACFF7', '#006D8A', '#FF4E00', '#FFAC00'],
  // legend: {
  //   x: 'right',
  //   y: 'center',
  //   orient: 'vertical',
  //   itemGap: 10,
  //   textStyle: {
  //     color: 'rgba(0, 0, 0, .45)',
  //   },
  // },
  title: {
    textStyle: {
      fontSize: 32,
      color: 'rgba(0, 0, 0, 0.58)',
    },
    subtextStyle: {
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.38)',
    },
    x: 'center',
    // x: '20%',
    // y: 'center'
    top: '40%',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
};
