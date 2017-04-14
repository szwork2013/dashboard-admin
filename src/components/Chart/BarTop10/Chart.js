/**
* @Author: eason
* @Date:   2017-04-14T00:16:19+08:00
* @Email:  uniquecolesmith@gmail.com
* @Last modified by:   eason
* @Last modified time: 2017-04-14T01:40:10+08:00
* @License: MIT
* @Copyright: Eason(uniquecolesmith@gmail.com)
*/

import React, { PureComponent } from 'react';

const getStyles = (props) => {
  return {
    root: {
      fontSize: 14,
      position: 'relative',
      width: '100%',
      height: '100%',
      padding: '8px 16px',
      backgroundColor: 'transparent',
      ...props.style,
    },

    title: {
      textAlign: 'left',
      color: '#acfaff',
      height: 32,
      lineHeight: '32px',
    },

    bars: {
      listStyle: 'none',
      height: 'calc(100% - 32px)',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-around',

      item: {
        fontSize: 10,
        width: '45%',
        height: '20%',
        display: 'flex',
        alignItems: 'center',

        index: {
          color: '#48a4d6',
          fontSize: 14,
          paddingRight: 8,
        },

        content: {
          flex: 1,
        },

        message: {
          display: 'flex',
          justifyContent: 'space-between',
          // marginBottom: 2,

          name: {
            color: '#a4a7a9',
          },

          value: {
            fontSize: 13,
            color: '#76e4ff',
          },
        },

        percentContainer: {
          position: 'relative',
          height: 4,
          backgroundColor: 'rgba(24, 55, 69, .8)',
        },

        percent: {
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: 0,
          backgroundColor: '#65d4b6',
          transition: 'all .3s ease-in',
        },
      },
    },
  };
};

export default class Chart extends PureComponent {

  render() {
    const { title, series } = this.props;
    const styles = getStyles(this.props);
    return (
      <div style={styles.root}>
        <div style={styles.title}>{title}</div>
        <ul style={styles.bars}>
          {series.map(({ name, value, percent }, i) => (
            <li key={i} style={styles.bars.item}>
              <div style={styles.bars.item.index}>{ i < 9 ? `0${i + 1}` : (i + 1)}</div>
              <div style={styles.bars.item.content}>
                <div style={styles.bars.item.message}>
                  <div style={styles.bars.item.message.name}>{name}</div>
                  <div style={styles.bars.item.message.value}>{value}</div>
                </div>
                <div style={styles.bars.item.percentContainer}>
                  <div style={{ ...styles.bars.item.percent, width: percent }} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div style={styles.topLeft} />
        <div style={styles.topRight} />
        <div style={styles.bottomRight} />
        <div style={styles.bottomLeft} />
      </div>
    );
  }
}
