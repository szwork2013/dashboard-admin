/**
* @Author: eason
* @Date:   2017-04-18T18:22:24+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-19T11:47:13+08:00
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

    /**
     * [onUpdate description]
     * @type {[type]}
     */
    onUpdate: PropTypes.func,
  };

  componentDidUpdate() {
    if (this.props.onUpdate) {
      this.props.onUpdate();
    }
  }

  render() {
    const {
      theme,
      option, data, getOption,
      ...otherProps
    } = this.props;

    const finalData = data || {};
    const finalOption = getOption(option, finalData);
    return (
      <Echarts
        ref={ref => (this.echartRef = ref)}
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
