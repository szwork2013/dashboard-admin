/**
* @Author: eason
* @Date:   2017-04-04T19:55:48+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-19T16:40:38+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent } from 'react';
import { connect } from 'dva';

import { Icon } from 'antd';

import CHARTS, { getInitialState } from './meta';

import styleClass from './Menu.less';

const getStyles = (props, state) => {
  return {
    root: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },

    mask: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // zIndex: 10,
      // opacity: 1,
      fontSize: 32,
      // backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },

    availableChart: {
      padding: 8,
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 56,
      transform: `translateY(${state.hover ? 0 : 56}px)`,
      listStyle: 'none',
      display: 'flex',
      flexFlow: 'row wrap',
      border: '1px solid #ccc',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      opacity: state.hover ? 1 : 0,
      transition: 'opacity .3s ease-in, transform .3s ease-in',
      // transitionOrigin: 'center center',
      // transform: `rotateX(${state.hover ? 0 : 60}deg)`,

      item: {
        width: 40,
        height: 40,
        lineHeight: '40px',
        textAlign: 'center',
        marginRight: 4,
        marginBottom: 4,
        // border: '1px solid #ccc',
      },
    },
  };
};

class Menu extends PureComponent {

  state = {
    hover: false,
  };

  toggleHover = (e) => {
    e.preventDefault();
    if (!this.props.editable) return false;
    this.setState(({ hover }) => ({ hover: !hover }));
  };

  render() {
    const styles = getStyles(this.props, this.state);
    const { selectedId, selectType } = this.props;
    return (
      <div style={styles.root}>
        <div
          style={styles.mask}
          onClick={this.toggleHover}
        >
          { /* <span style={{ cursor: 'pointer' }}>+</span> */ }
          { this.props.children }
        </div>
        <ul
          style={styles.availableChart}
        >
          <li
            onClick={() => selectType(selectedId)}
            style={styles.availableChart.item}
            className={styleClass.chartItem}
          >
            空
          </li>
          {CHARTS.map(({ key: type, icon }) => (
            <li
              key={type}
              onClick={() => selectType(selectedId, type)}
              style={styles.availableChart.item}
              className={styleClass.chartItem}
            >
              <Icon type={icon} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ chart }) => ({
    selectedId: chart.selectedId,
  }),
  dispatch => ({
    selectType: (key, type) => {
      if (type === undefined) {
        return dispatch({ type: 'chart/achart/remove', payload: key });
      }

      const { option, data } = getInitialState(type);
      return dispatch({ type: 'chart/achart/select', payload: { key, type, option, data } });
    },
  }))(Menu);
