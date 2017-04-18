/**
* @Author: eason
* @Date:   2017-04-05T14:42:22+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-19T00:22:37+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import BaseChart from '../BaseChart';
import option from './option';
import data from './data';
import getOption from './getOption';

export default class Ring extends BaseChart {
  static defaultProps = {
    option,
    data,
    getOption,
  };
}
