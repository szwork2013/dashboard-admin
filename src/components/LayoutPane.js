/**
* @Author: eason
* @Date:   2017-03-29T00:04:33+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-01T22:21:28+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent } from 'react';

import { Switch, Button, Icon } from 'antd';

import Echarts from 'echarts-for-react';
// import Echarts from 'react-echarts';

import EGridLayout from './EGridLayout';

import data from '../../mock/data';
import lineOption from '../../mock/line';
import barOption from '../../mock/bar';

import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

const getStyles = (props) => {
  return {
    root: {},

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

const getOption = () => {
  return data;
};

export default class LayoutPane extends PureComponent {

  render() {
    const styles = getStyles(this.props);

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
              disabled={!this.props.editable}
              onClick={() => this.props.onLayoutRemove(this.props.selectedId)}
            />
            <Button
              style={styles.btns.add}
              type="primary"
              shape="circle"
              icon="plus"
              disabled={!this.props.editable}
              onClick={this.props.onLayoutAdd}
            />
            <Switch
              checked={this.props.editable}
              onChange={this.props.onSwitchEdit}
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="cross" />}
            />
          </div>
        </div>
        <div style={styles.body}>
          <div style={styles.tools}>
            123
          </div>
          <div style={styles.layout}>
            <EGridLayout
              selectedId={this.props.selectedId}
              editable={this.props.editable}
              layout={this.props.layout}
              className="layout"
              cols={12}
              rowHeight={30}
              width={1000}
              onLayoutSelect={this.props.onLayoutSelect}
              onLayoutChange={this.props.onLayoutChange}
            >
              <Echarts key="a" option={getOption()} style={{ width: '100%', height: '100%' }} />
              <Echarts key="b" option={lineOption} style={{ width: '100%', height: '100%' }} />
              <Echarts key="c" option={barOption} style={{ width: '100%', height: '100%' }} />
            </EGridLayout>
          </div>
        </div>
      </div>
    );
  }
}
