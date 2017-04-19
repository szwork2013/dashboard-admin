/**
* @Author: eason
* @Date:   2017-04-05T00:50:35+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-19T11:22:58+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PropTypes, PureComponent } from 'react';

const getStyles = (props) => {
  return {
    root: {
      fontSize: 14,
      position: 'relative',
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      ...props.style,
    },

    header: {
      // width: '100%',
      display: props.hideHeader ? 'none' : 'flex',
      height: 32,
      lineHeight: '32px',
      marginLeft: 16,
      marginRight: 16,
      borderBottom: '1px solid rgba(0, 0, 0, .10)',
      justifyContent: 'space-between',

      title: {
        ...props.titleStyle,
      },

      rightArea: {
        fontSize: 10,
        display: 'flex',
        alignItems: 'center',

        label: {
          color: 'rgba(0, 0, 0, .38)',
          marginRight: 4,
        },

        value: {
          fontSize: 20,
          color: '#76e4ff',
        },
      },
    },

    body: {
      width: '100%',
      height: props.hideHeader ? '100%' : 'calc(100% - 32px)',
    },
  };
};

const withTitle = Chart => class extends PureComponent {
  /* eslint-disable */
  static propTypes = {
    type: PropTypes.string,

    /**
     * [name description]
     * @type {[type]}
     */
    title: PropTypes.string,

    /**
     * [labels description]
     * @type {[type]}
     */
    labels: PropTypes.arrayOf(PropTypes.string),

    /**
     * [series description]
     * @type {[type]}
     */
    series: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.array,
    })),
  };
  /* eslint-enable */

  static defaultProps = {
  };
  //
  // getOptions = () => {
  //   return this.props.combine(
  //     this.props.option,
  //     this.props.data,
  //   );
  // };

  render() {
    // const {
    //   editable, type,
    //   // title,
    // } = this.props;
    // if (!type) {
    //   return editable ? (
    //     <div
    //       style={{
    //         width: '100%',
    //         height: '100%',
    //         border: '1px dashed #ccc',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}
    //     >
    //       +
    //     </div>
    //   ) : null;
    // }

    const styles = getStyles(this.props);
    const { title } = Chart.props;

    return (
      <div style={styles.root}>
        <div style={styles.header}>
          <div style={styles.header.title}>{title}</div>
          <div style={styles.header.rightArea}>
            {
              /*
              <span style={styles.header.rightArea.label}>当日累加</span>
              <span style={styles.header.rightArea.value}>1,521</span>
              */
              this.props.rightArea
            }
          </div>
        </div>
        <div style={styles.body}>
          { Chart }
        </div>
      </div>
    );
  }
};

export default withTitle;
