/**
* @Author: eason
* @Date:   2017-04-05T00:50:35+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-06T15:08:06+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PropTypes, PureComponent } from 'react';
import Echarts from 'echarts-for-react';

import { getChart } from './meta';

export default class Chart extends PureComponent {
  /* eslint-disable */
  static propTypes = {
    type: PropTypes.string,

    /**
     * [name description]
     * @type {[type]}
     */
    title: PropTypes.string,

    /**
     * [labels description]
     * @type {[type]}
     */
    labels: PropTypes.arrayOf(PropTypes.string),

    /**
     * [series description]
     * @type {[type]}
     */
    series: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      data: PropTypes.array.isRequired,
    })),
  };
  /* eslint-enable */

  static defaultProps = {
  };

  render() {
    const { editable, type, labels, series } = this.props;
    if (!type) {
      return editable ? (
        <div
          style={{
            width: '100%',
            height: '100%',
            border: '1px dashed #ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          +
        </div>
      ) : null;
    }

    const data = { labels, series };
    const option = getChart({ type, data });

    return (
      <Echarts
        style={{ position: 'relative', width: '100%', height: '100%' }}
        className={this.props.className}
        option={option}
        notMerge
        lazyUpdate
      />
    );
  }
}
