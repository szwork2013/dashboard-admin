/**
* @Author: eason
* @Date:   2017-03-26T20:02:00+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T05:15:18+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PropTypes } from 'react';
import { connect } from 'dva';

import { Button, Row, Form, Input } from 'antd';

const getStyles = () => {
  return {
    root: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: '-160px 0 0 -160px',
      width: 320,
      height: 320,
      padding: 36,
      boxShadow: '0 0 100px rgba(0, 0, 0, .08)',
    },

    logo: {
      textAlign: 'center',
      height: 40,
      lineHeight: '40px',
      cursor: 'pointer',
      marginBottom: 24,

      image: {
        width: 40,
        marginRight: 8,
      },

      text: {
        verticalAlign: 'text-bottom',
        fontSize: 16,
        textTransform: 'uppercase',
        display: 'inline-block',
      },
    },

    submitBtn: {
      width: '100%',
    },
  };
};

function Login({
  auth, loading, onOk, form: { getFieldDecorator, validateFieldsAndScroll } }, { router },
) {
  if (auth) {
    router.replace('/admin');
    return null;
  }

  const handleOk = () => validateFieldsAndScroll((err, values) => {
    if (err) return false;
    return onOk(values);
  });

  const styles = getStyles();
  return (
    <div style={styles.root}>
      <div style={styles.logo}>
        <img style={styles.logo.image} alt="" src="" />
        <span style={styles.logo.text}>Dashboard</span>
      </div>
      <form>
        <Form.Item hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: '请输入用户名' },
            ],
          })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '请输入密码' },
            ],
          })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
        </Form.Item>
        <Row>
          <Button style={styles.submitBtn} size="large" type="primary" onClick={handleOk} loading={loading}>
            登录
          </Button>
        </Row>
      </form>
    </div>
  );
}

Login.contextTypes = {
  router: PropTypes.any,
};

const mapStateToProps = state => ({ auth: state.auth.auth });

const mapDispatchToProps = (dispatch) => {
  return {
    onOk({ username, password }) {
      dispatch({ type: 'auth/authorize', payload: { username, password } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));
