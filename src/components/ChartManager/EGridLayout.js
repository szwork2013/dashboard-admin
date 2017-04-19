/**
* @Author: eason
* @Date:   2017-04-01T15:28:03+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-19T16:08:50+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent, PropTypes } from 'react';
import GridLayout from 'react-grid-layout';

import Menu from './Menu';

import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';

const getStyles = () => {
  return {
    root: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },

    child: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      empty: {
        border: '1px dashed #ccc',
      },

      selected: {
        // border: '1px dashed rgba(0, 255, 255, .98)',
        border: '1px dashed #f04134',
      },
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

  // state = {
  //   width: 0,
  // };
  //
  // componentDidMount() {
  //   this.setState({ width: this.gridLayoutArea.offsetWidth });
  // }

  render() {
    const {
      editable, layout, cols, rowHeight, width,
      selectedId, children,
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
        cols={cols}
        rowHeight={rowHeight}
        width={width}
        onLayoutChange={onLayoutChange}
      >
        {layout.map(({ i }) => {
          const index = keys.indexOf(i);
          if (index !== -1) {
            return (
              <div
                key={i}
                style={{ ...styles.child, ...(i === selectedId ? styles.child.selected : {}) }}
                onClick={() => handleLayoutSelect(i)}
              >
                <Menu editable={editable}>
                  { React.cloneElement(children[index], { editable }) }
                </Menu>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                style={{
                  ...styles.child,
                  ...(editable ? styles.child.empty : {}),
                  ...(i === selectedId ? styles.child.selected : {}),
                }}
                onClick={() => handleLayoutSelect(i)}
              >
                { editable ? <Menu editable={editable}>+</Menu> : null }
              </div>
            );
          }
        })}
      </GridLayout>
    );
  }
}
