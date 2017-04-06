/**
* @Author: eason
* @Date:   2017-03-06T17:46:52+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-06T14:30:30+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

module.exports = {
  series: [{
    type: 'pie',
    radius: ['50%', '70%'],
    avoidLabelOverlap: false,
    startAngle: 180,
    color: ['rgba(0, 0, 0, 0.05)', 'transparent'],
    'hoverAnimation': false,
    'legendHoverLink': false,
    'label': {
      'normal': {
        'show': false,
        'position': 'center',
      },
      'emphasis': {
        'show': true,
        'textStyle': {
          'fontSize': '30',
          'fontWeight': 'bold',
        },
      },
    },
    'labelLine': {
      'normal': {
        'show': false,
      },
    },
    'data': [{
      'value': 50,
      'name': '1',
    }, {
      'value': 50,
      'name': '2',
    }],
  }, {
    'name': '',
    'type': 'pie',
    'radius': ['50%', '70%'],
    'avoidLabelOverlap': false,
    'startAngle': 180,
    'color': ['#6fe9c8', 'transparent'],
    'hoverAnimation': false,
    'legendHoverLink': false,
    'itemStyle': {
      'normal': {
        'borderColor': 'transparent',
        'borderWidth': '20',
      },
      'emphasis': {
        'borderColor': 'transparent',
        'borderWidth': '20',
      },
    },
    'z': 10,
    'label': {
      'normal': {
        'show': false,
        'position': 'center',
      },
      'emphasis': {
        'show': true,
        'textStyle': {
          'fontSize': '30',
          'fontWeight': 'bold',
        },
      },
    },
    'labelLine': {
      'normal': {
        'show': false,
      },
    },
    'data': [{
      'name': '',
      'value': 0.2 * 0.5,
    }, {
      'name': '',
      'value': 1 - (0.2 * 0.5),
    }],
  }],
};
