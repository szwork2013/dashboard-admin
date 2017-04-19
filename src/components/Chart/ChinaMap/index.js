/**
* @Author: eason
* @Date:   2017-04-05T14:42:22+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-19T11:54:10+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import BaseChart from '../lib/baseChart';
import option from './option';
import getOption from './getOption';

import './china';

export default class Bar extends BaseChart {
  static defaultProps = {
    option,
    getOption,
  };
}
