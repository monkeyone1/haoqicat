import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Main extends Component {
  render() {
    let styles = {
      root: {
        fontFamily: 'sans-serif'
      },
      header: {
        backgroundColor: '#00bcd4',
        height: '8.4rem',
        width: '100%',
        textAlign: 'center'
      },
      logo: {
        fontWeight: '600',
        fontSize: '3rem',
        letterSpacing: '-1px',
        lineHeight: '8.4rem',
        color: '#fff'
      }
    };
    return (
      <MuiThemeProvider>
      <StyleRoot style={styles.root}>
        <header style={styles.header}>
          <div style={styles.logo}>Hey 这是好奇猫</div>
        </header>
        { React.cloneElement(this.props.children, this.props) }
      </StyleRoot>
      </MuiThemeProvider>
    );
  }
}

export default Main;
