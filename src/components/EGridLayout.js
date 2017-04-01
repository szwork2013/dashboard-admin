/**
* @Author: eason
* @Date:   2017-04-01T15:28:03+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-01T18:26:10+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent, PropTypes } from 'react';
import GridLayout from 'react-grid-layout';

const getStyles = () => {
  return {
    root: {},

    child: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
};

export default class EGridLayout extends PureComponent {
  static propTypes = {
    /**
     * edit switch
     * @type {bool}
     */
    editable: PropTypes.bool,

    /**
     * React Grid Layout
     * @type {array}
     */
    layout: PropTypes.arrayOf(PropTypes.shape({
      i: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      w: PropTypes.number.isRequired,
      h: PropTypes.number.isRequired,
    })),

    /**
     * Layout Select Callback
     * @type {[type]}
     */
    onLayoutSelect: PropTypes.func,

    /**
     * Layout Change Callback
     * @type {[type]}
     */
    onLayoutChange: PropTypes.func,
  };

  static defaultProps = {
    editable: true,
    onLayoutSelect: () => {},
  };

  render() {
    const {
      selectedId, editable, layout, children,
      onLayoutSelect, onLayoutChange,
    } = this.props;
    const keys = children.map(e => e.key);
    const styles = getStyles(this.props);

    const handleLayoutSelect = editable ? onLayoutSelect : () => {};

    return (
      <GridLayout
        isResizable={editable}
        isDraggable={editable}
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={onLayoutChange}
      >
        {layout.map(({ i }) => {
          const index = keys.indexOf(i);
          if (index !== -1) {
            return (
              <div
                key={i}
                style={styles.child}
                onClick={() => handleLayoutSelect(i === selectedId ? null : i)}
              >
                { children[index] }
              </div>
            );
          } else {
            return (
              <div key={i} style={styles.child} onClick={() => handleLayoutSelect(i)}>空</div>
            );
          }
        })}
      </GridLayout>
    );
  }
}
