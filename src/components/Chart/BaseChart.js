/**
* @Author: eason
* @Date:   2017-04-18T18:22:24+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-19T00:17:18+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Echarts from 'echarts-for-react';

export default class BaseChart extends PureComponent {
  static propTypes = {
    /**
     * [option description]
     * @type {[type]}
     */
    option: PropTypes.object.isRequired,

    /**
     * [data description]
     * @type {[type]}
     */
    data: PropTypes.object,

    /**
     * [getOption description]
     * @type {[type]}
     */
    getOption: PropTypes.func.isRequired,
  };

  render() {
    const {
      theme,
      option, data, getOption,
      ...otherProps
    } = this.props;

    const finalOption = getOption(option, data || {});
    return (
      <Echarts
        style={{ position: 'relative', width: '100%', height: '100%' }}
        option={finalOption}
        theme={theme}
        notMerge
        lazyUpdate
        {...otherProps}
      />
    );
  }
}
