import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from '../header';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { gameOver, timerDecrement } from '../../lib/action';

class Game extends React.Component {
  componentDidMount= () => {
    // this.countDownTimer();
  }
  countDownTimer = () => {
    setInterval(() => {
      console.log('Timer Change: ', this.props.timer);
      this.props.timerDecrement();
      if (this.props.timer <= 0) {
        clearInterval(gameTimer);
      }
    }, 1000);

    // this.props.stopGame();
  }

  render() {
    console.log('Render Triggered');

    return (
      <View style={styles.container}>
        <Header />
        <Text>
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
  stopGame: () => dispatch(gameOver()),
  timerDecrement: () => dispatch(timerDecrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);
