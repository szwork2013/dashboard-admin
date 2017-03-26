/**
* @Author: eason
* @Date:   2017-03-27T00:46:46+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T01:21:43+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent, PropTypes } from 'react';
import { Breadcrumb, Icon } from 'antd';

//
String.prototype.hyphenToHump = function () { // eslint-disable-line
  return this.replace(/-(\w)/g, (...args) => {
    return args[1].toUpperCase();
  });
};
//

const getStyles = () => {
  return {
    root: {
      height: 64,
      lineHeight: '64px',
      padding: '0 24px',
      marginBottom: -24,
    },
  };
};

const getPathSet = (pathSet, menus = [], parentPath = '/') => {
  menus.forEach((item) => {
    pathSet[(parentPath + item.key).replace(/\//g, '-').hyphenToHump()] = { // eslint-disable-line
      path: `${parentPath}${item.key}`,
      label: item.label,
      icon: item.icon || '',
      clickable: item.clickable === undefined,
    };
    if (item.child) {
      getPathSet(pathSet, item.child, `${parentPath}${item.key}`);
    }
  });
};

const getBreads = (location, menus) => {
  const paths = [];
  const pathSet = {};
  getPathSet(pathSet, menus);

  location.pathname.substr(1).split('/').forEach((item, key) => {
    if (key > 0) {
      paths.push((`${paths[key - 1]}-${item}`).hyphenToHump());
    } else {
      paths.push((`-${item}`).hyphenToHump());
    }
  });

  return paths.map((item, key) => {
    if (!(item in pathSet)) {
      item = 'Dashboard'; // eslint-disable-line
    }
    return (
      <Breadcrumb.Item key={key} {...((paths.length - 1 === key) || !pathSet[item].clickable) ? '' : { href: `#${pathSet[item].path}` }}>
        {pathSet[item].icon
          ? <Icon type={pathSet[item].icon} />
          : ''}
        <span>{pathSet[item].label}</span>
      </Breadcrumb.Item>
    );
  });
};

export default class Bread extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
    menus: PropTypes.array,
  };

  static defaultProps = {
    menus: [
      {
        key: 'dashboard',
        icon: 'laptop',
        label: 'Dashboard',
        path: 'admin',
      },
    ],
  };

  render() {
    const styles = getStyles(this.props);
    const { location, menus } = this.props;
    return (
      <div style={styles.root}>
        <Breadcrumb>
          <Breadcrumb.Item href="/"><Icon type="home" />
            <span>主页</span>
          </Breadcrumb.Item>
          {getBreads(location, menus)}
        </Breadcrumb>
      </div>
    );
  }
}
