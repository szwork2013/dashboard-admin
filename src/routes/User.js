/**
* @Author: eason
* @Date:   2017-03-26T21:56:45+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T05:28:17+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React from 'react';
import { connect } from 'dva';
import { Table, Icon } from 'antd';

import UserModal from '../components/UserModal';

const getStyles = () => {
  return {
    root: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },

    actions: {
      // marginBottom: 16,
      display: 'flex',
      justifyContent: 'flex-end',

      btn: {
        padding: 8,
        marginRight: -8,
        cursor: 'pointer',
      },
    },

    content: {},
  };
};

function User({
  loading,
  visible,
  url,
  columns,
  pagination,
  data,
  handleOpenSetting,
  handleCloseSetting,
  handleSubmitSetting,
  handleChangePage,
}) {
  const styles = getStyles();
  return (
    <div style={styles.root}>
      <div style={styles.actions}>
        <div style={styles.actions.btn} onClick={handleOpenSetting}>
          <Icon style={{ fontSize: 16 }} type="setting" />
        </div>
      </div>
      <UserModal
        visible={visible}
        onCancel={handleCloseSetting}
        onOk={handleSubmitSetting}
        item={{ url, columns: JSON.stringify(columns) }}
      />
      <div style={styles.content}>
        <Table
          loading={loading}
          columns={columns}
          pagination={{ ...pagination, onChange: handleChangePage }}
          dataSource={data}
        />
      </div>
    </div>
  );
}

const mapStateToProps = ({ user, loading }) => {
  return {
    loading: loading.models.user,
    visible: user.visible,
    url: user.url,
    columns: user.columns,
    pagination: user.pagination,
    data: user.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpenSetting() {
      dispatch({ type: 'user/modal/show' });
    },
    handleCloseSetting() {
      dispatch({ type: 'user/modal/hide' });
    },
    handleSubmitSetting({ url, columns }) {
      dispatch({ type: 'user/sync/save/settings', payload: { url, columns: JSON.parse(columns) } });
    },
    handleChangePage(pageIndex) {
      dispatch({ type: 'user/sync/list', payload: pageIndex });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
