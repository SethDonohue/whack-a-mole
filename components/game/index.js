import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from '../header';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { gameOver, timerDecrement } from '../../lib/action';

class Game extends React.Component {
  countDownTimer = () => {
    const gameTimer = setInterval(() => {
      this.props.timerDecrement();
      if (this.props.timer <= 0) {
        clearInterval(gameTimer);
        this.props.gameOver();
      }
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text onPress={this.countDownTimer}>
          wHACK a mOLE Game!
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  timer: state.timer,
})

const mapDispatchToProps = dispatch => ({
  gameOver: () => dispatch(gameOver()),
  timerDecrement: () => dispatch(timerDecrement()),
  gameReset: () => dispatch(gameReset()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);
