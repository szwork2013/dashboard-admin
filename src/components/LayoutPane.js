/**
* @Author: eason
* @Date:   2017-03-29T00:04:33+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-19T17:48:00+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent } from 'react';

import { Switch, Button, Icon } from 'antd';
import { ResizableBox } from 'react-resizable';

import Control from 'zcontrol';
import ZUtils from 'zcontrol/lib/utils';

import EGridLayout from './ChartManager/EGridLayout';
import Chart from './ChartManager';

const getStyles = (props, state) => {
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
      flexFlow: 'row nowrap',
    },

    tools: {
      width: 206,
      minHeight: 560,
    },

    layout: {
      // flex: '1 0 0px',
      // width: 800,
      backgroundColor: '#fff',
      // backgroundColor: '#201c22',
      boxShadow: '0 2px 4px 0 rgba(0,0,0,.1), 0 16px 24px 0 rgba(81,129,228,.1)',
      minHeight: 560,
      width: state.width,
      // height: state.height,
    },

    editor: {
      flex: 1,
      position: 'relative',
    },
  };
};

export default class LayoutPane extends PureComponent {
  state = {
    width: 1000,
    height: 560,
  };

  handleOptionChange = (option) => {
    console.log(option);
  }

  render() {
    const styles = getStyles(this.props, this.state);

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
          <ResizableBox
            style={styles.layout}
            width={this.state.width}
            height={this.state.height}
            onResize={(e, { size }) => this.setState(size)}
          >
            <EGridLayout
              selectedId={this.props.selectedId}
              editable={this.props.editable}
              layout={this.props.layout}
              className="layout"
              cols={12}
              rowHeight={30}
              width={this.state.width}
              onLayoutSelect={this.props.onLayoutSelect}
              onLayoutChange={this.props.onLayoutChange}
            >
              {
                this.props.charts.map(e => <Chart {...e} />)
              }
            </EGridLayout>
          </ResizableBox>
          <div style={styles.editor}>
            <Control
              data={ZUtils.toValidation(this.props.selectedOption)}
              onChange={this.handleOptionChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
