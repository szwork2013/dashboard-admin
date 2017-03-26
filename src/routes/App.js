/**
gin
* @Author: eason
* @Date:   2017-03-26T20:18:00+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T05:08:47+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PropTypes } from 'react';
import { connect } from 'dva';

import Helmet from 'react-helmet';

const getStyles = () => {
  return {
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
    },
  };
};

function App({ auth, children, location: { pathname } }, { router }) {
  const styles = getStyles();

  if (!auth && pathname !== '/login') {
    router.replace('/login');
  }

  return (
    <div style={styles.root}>
      <Helmet>
        <title>DASHBOARD ADMIN</title>
        <script src="//at.alicdn.com/t/font_c4y7asse3q1cq5mi.js" />
      </Helmet>
      {children}
    </div>
  );
}

App.contextTypes = {
  router: PropTypes.any,
};

export default connect(state => ({
  auth: state.auth.auth,
}))(App);
