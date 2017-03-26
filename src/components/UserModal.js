/**
* @Author: eason
* @Date:   2017-03-27T01:44:45+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-03-27T05:35:32+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PropTypes } from 'react';
import { Form, Input, Modal } from 'antd';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const modal = ({
  visible, item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    // getFieldsValue,
  },
}) => {
  const handleOk = () => validateFields((err, values) => {
    if (err) return false;
    onOk(values);
  });

  const modalOptions = {
    title: '更新配置',
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal',
  };

  return (
    <Modal {...modalOptions}>
      <Form layout="horizontal">
        <FormItem label="URL: " hasFeedback {...formItemLayout}>
          {getFieldDecorator('url', {
            initialValue: item.url,
            rules: [
              { required: true, message: '请输入Table URL' },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Columns JSON: " hasFeedback {...formItemLayout}>
          {getFieldDecorator('columns', {
            initialValue: item.columns,
            rules: [
              { required: true, message: '请输入Columns JSON' },
              {
                validator(rule, value, cb) {
                  try { JSON.parse(value); } catch (err) { cb('Invalid JSON String.'); }
                },
              },
            ],
          })(<Input type="textarea" rows="10" />)}
        </FormItem>
      </Form>
    </Modal>
  );
};

modal.propTypes = {
  form: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  item: PropTypes.object,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
};

export default Form.create()(modal);
