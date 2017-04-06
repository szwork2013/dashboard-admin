/**
* @Author: eason
* @Date:   2017-03-28T23:48:52+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-05T11:30:11+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React from 'react';
import { connect } from 'dva';

import { Switch, Button, Icon } from 'antd';

import EGridLayout from '../components/EGridLayout';

import Chart from '../components/Chart';

const getStyles = (props) => {
  return {
    root: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },

    controls: {
      padding: 10,
      fontSize: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
    },

    btns: {

      add: {
        marginRight: 16,
      },

      remove: {
        display: props.editable && props.removable ? 'inline-block' : 'none',
        marginRight: 16,
      },
    },

    body: {
      overflow: 'auto',
      margin: '16px 0',
      display: 'flex',
      flexFlow: 'row-reverse nowrap',
    },

    tools: {
      width: 206,
      minHeight: 560,
    },

    layout: {
      flex: '1 0 1000px',
      // width: 800,
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px 0 rgba(0,0,0,.1), 0 16px 24px 0 rgba(81,129,228,.1)',
      minHeight: 560,
    },
  };
};

function ChartContainer(props) {
  const styles = getStyles(props);

  return (
    <div style={styles.root}>
      <div style={styles.controls}>
        <span>图表</span>
        <div style={styles.btns}>
          <Button
            style={styles.btns.remove}
            type="danger"
            shape="circle"
            icon="delete"
            disabled={!props.editable}
            onClick={() => props.onLayoutRemove(props.selectedId)}
          />
          <Button
            style={styles.btns.add}
            type="primary"
            shape="circle"
            icon="plus"
            disabled={!props.editable}
            onClick={props.onLayoutAdd}
          />
          <Switch
            checked={props.editable}
            onChange={props.onSwitchEdit}
            checkedChildren={<Icon type="check" />}
            unCheckedChildren={<Icon type="cross" />}
          />
        </div>
      </div>
      <div style={styles.body}>
        <div style={styles.tools} />
        <div style={styles.layout}>
          <EGridLayout
            selectedId={props.selectedId}
            editable={props.editable}
            layout={props.layout}
            className="layout"
            cols={12}
            rowHeight={30}
            width={1000}
            onLayoutSelect={props.onLayoutSelect}
            onLayoutChange={props.onLayoutChange}
          >
            <Chart key="a" />
            <Chart key="b" />
            <Chart key="c" />
            <Chart key="d" />
          </EGridLayout>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ chart }) => {
  const { selectedId, editable, layout } = chart;
  return {
    selectedId,
    deletable: selectedId !== null,
    editable,
    layout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchEdit() {
      dispatch({ type: 'chart/edit/switch' });
    },
    onLayoutSelect(id) {
      dispatch({ type: 'chart/layout/select', payload: id });
    },
    onLayoutAdd() {
      dispatch({ type: 'chart/layout/add' });
    },
    onLayoutRemove(id) {
      dispatch({ type: 'chart/layout/remove', payload: id });
    },
    onLayoutChange(layout) {
      dispatch({ type: 'chart/layout/change', payload: layout });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer);
