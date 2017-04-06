/**
* @Author: eason
* @Date:   2017-03-28T23:48:52+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-05T12:51:39+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React from 'react';
import { connect } from 'dva';

import LayoutPane from '../components/LayoutPane';

const getStyles = () => {
  return {
    root: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  };
};

function Chart(props) {
  const styles = getStyles(props);
  return (
    <div style={styles.root}>
      <LayoutPane
        selectedId={props.selectedId}
        removable={props.deletable}
        editable={props.editable}
        layout={props.layout}
        charts={props.charts}
        onSwitchEdit={props.onSwitchEdit}
        onLayoutSelect={props.onLayoutSelect}
        onLayoutAdd={props.onLayoutAdd}
        onLayoutRemove={props.onLayoutRemove}
        onLayoutChange={props.onLayoutChange}
      />
    </div>
  );
}

const mapStateToProps = ({ chart }) => {
  const { selectedId, editable, layout, charts } = chart;
  return {
    selectedId,
    deletable: selectedId !== null,
    editable,
    layout,
    charts,
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

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
