import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import Button from '../button';

class Header extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/game-screen-top.png')}
        style={styles.header}>
        <Button
        style={styles.buttonOne}
        />
        <Button
        isTimer={true}
        style={styles.buttonTwo}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    // imageStyle: 'stretch',
    // position: 'relative',
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOne: {
    position: 'absolute',
    top: '14%',
    left: '5%',
  },
  buttonTwo: {
    position: 'absolute',
    top: '14%',
    right: '5%',
  },
});


export default Header;