/**
* @Author: eason
* @Date:   2017-03-26T20:58:24+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-01T10:56:32+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent, PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const getMenus = function (menus, siderFold, parentPath = '/') {
  return menus.map(({ key, icon, label, path, childRoutes }) => {
    const linkTo = `${parentPath}${path}`;
    if (childRoutes) {
      return (
        <Menu.SubMenu
          key={key}
          title={
            <span>
              {icon ? <Icon type={icon} /> : null}
              {siderFold ? null : label}
            </span>
          }
        >
          {getMenus(childRoutes, siderFold, `${linkTo}/`)}
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item key={key}>
        <Link to={linkTo}>
          {icon ? <Icon type={icon} /> : null}
          {siderFold ? null : label}
        </Link>
      </Menu.Item>
    );
  });
};

export default class Menus extends PureComponent {
  static propTypes = {
    menus: PropTypes.array,
    siderFold: PropTypes.bool,
    darkTheme: PropTypes.bool,
    handleClickNavMenu: PropTypes.func,
  };

  static defaultProps = {
    menus: [
      // {
      //   key: 'dashboard',
      //   icon: 'laptop',
      //   label: 'Dashboard',
      //   path: 'admin/dashboard',
      // },
      // {
      //   key: 'chart',
      //   icon: 'area-chart',
      //   label: 'Chart',
      //   path: 'admin/chart',
      // },
    ],
    darkTheme: true,
  };

  render() {
    const {
      menus,
      siderFold,
      darkTheme,
      handleClickNavMenu,
    } = this.props;
    return (
      <Menu
        mode={siderFold ? 'vertical' : 'inline'}
        theme={darkTheme ? 'dark' : 'light'}
        onClick={handleClickNavMenu}
      >
        {getMenus(menus, siderFold)}
      </Menu>
    );
  }
}
