/**
* @Author: eason
* @Date:   2017-04-05T14:42:22+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-19T11:54:29+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import BaseChart from '../lib/baseChart';
import option from './option';
import getOption from './getOption';

export default class Pie extends BaseChart {
  static defaultProps = {
    option,
    getOption,
  };
}
