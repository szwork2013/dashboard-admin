/**
* @Author: eason
* @Date:   2017-03-26T21:27:51+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-01T11:06:33+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React from 'react';
import { connect } from 'dva';

import Sider from '../components/Sider';
import Header from '../components/Header';
import Bread from '../components/Bread';

const getStyles = (props) => {
  return {
    root: {},

    sider: {
      width: !props.siderFold ? 224 : 42,
      backgroundColor: '#3e3e3e',
      position: 'absolute',
      overflow: 'visible',
      paddingBottom: 24,
      height: '100vh',
      transition: 'all .3s cubic-bezier(.215, .61, .355, 1)',
      boxShadow: '4px 4px 20px 0 rgba(0, 0, 0, .01)',
      zIndex: 520,
      color: '#999',
    },

    main: {
      position: 'relative',
      marginLeft: !props.siderFold ? 224 : 42,
      overflow: 'auto',
      height: '100vh',
    },

    container: {
      margin: 24,
    },

    content: {
      minHeight: 'calc(100vh - 184px)',
      position: 'relative',
    },
  };
};

function AdminApp({ auth, admin, logout, location, children, switchSider }) {
  const styles = getStyles(admin);
  return (
    <div style={styles.root}>
      <Sider
        style={styles.sider}
        {...admin}
      />
      <div style={styles.main}>
        <Header
          logout={logout}
          switchSider={switchSider}
          {...admin}
          user={auth}
        />
        <Bread
          location={location}
          menus={admin.menus}
        />
        <div style={styles.container}>
          <div style={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  admin: state.admin,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout() {
      dispatch({ type: 'auth/unauthorize' });
    },
    switchSider() {
      dispatch({ type: 'admin/sider/switch' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminApp);
