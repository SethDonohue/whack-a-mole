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
        { this.props.timer <= 0 ? (
          <Button
            isReset={true}
            style={styles.buttonThree}
          />
        ): null}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOne: {
    position: 'absolute',
    top: '15%',
    left: '5%',
  },
  buttonTwo: {
    position: 'absolute',
    top: '15%',
    right: '5%',
  },
  buttonThree: {
    position: 'absolute',
    top: '35%',
    right: '5%',
  },
});

const mapStateToProps = state => ({
  // gameOver: state.gameOver,
  timer: state.timer,
});

export default connect(mapStateToProps)(Header);