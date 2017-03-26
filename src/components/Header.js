/**
* @Author: eason
* @Date:   2017-03-27T00:23:23+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T00:43:13+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/
import React, { PureComponent, PropTypes } from 'react';
import { Menu, Icon } from 'antd';
// import Menus from './Menu';

const getStyles = () => {
  return {
    root: {
      boxShadow: '4px 4px 40px 0 rgba(0,0,0,0.05)',
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      height: 47,
      backgroundColor: '#fff',
    },

    rightWrapper: {
      display: 'flex',
    },

    btn: {
      width: 47,
      height: 47,
      lineHeight: '47px',
      textAlign: 'center',
      fontSize: 18,
      cursor: 'pointer',
      transition: 'all 0.3s ease-in',
    },

    menu: {
      float: 'right',
    },
  };
};

export default class Header extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func,
    switchSider: PropTypes.func,
    siderFold: PropTypes.bool,
  };

  static defaultProps = {
    user: {},
  };

  render() {
    const { user, siderFold, switchSider, logout } = this.props;
    const handleClickMenu = e => e.key === 'logout' && logout();

    const styles = getStyles(this.props);
    return (
      <div style={{ ...styles.root, ...this.props.style }}>
        <div style={styles.btn} onClick={switchSider}>
          <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
        </div>
        <div style={styles.rightWrapper}>
          <div style={styles.btn}>
            <Icon type="mail" />
          </div>
          <Menu mode="horizontal" onClick={handleClickMenu}>
            <Menu.SubMenu
              style={styles.menu}
              title={<span><Icon type="user" />{user.name}</span>}
            >
              <Menu.Item key="logout">
                <a>注销</a>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}
