/**
* @Author: eason
* @Date:   2017-03-26T20:54:59+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-26T21:39:09+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent, PropTypes } from 'react';

import Menus from './Menus';

const getStyles = () => {
  return {
    root: {},

    logo: {
      transition: 'all .3s cubic-bezier(.215, .61, .355, 1)',
      textAlign: 'center',
      height: 40,
      lineHeight: '40px',
      cursor: 'pointer',
      margin: '28px 0',
      overflow: 'hidden',

      image: {
        borderStyle: 'none',
        width: 40,
        marginRight: 8,
        transition: 'all .3s cubic-bezier(.215, .61, .355, 1)',
      },

      text: {
        fontSize: 16,
        verticalAlign: 'text-bottom',
        textTransform: 'uppercase',
        display: 'inline-block',
      },
    },
  };
};

export default class Sider extends PureComponent {
  static propsTypes = {
    menus: PropTypes.bool,
    siderFold: PropTypes.bool,
    darkTheme: PropTypes.bool,
  };

  render() {
    const {
      menus,
      siderFold,
      darkTheme,
    } = this.props;
    const styles = getStyles(this.props);

    return (
      <div style={{ ...styles.root, ...this.props.style }}>
        <div style={styles.logo}>
          <img style={styles.logo.image} alt="" src="" />
          <span style={styles.logo.text}>Dashboard</span>
        </div>
        <Menus
          menus={menus}
          siderFold={siderFold}
          darkTheme={darkTheme}
        />
      </div>
    );
  }
}
