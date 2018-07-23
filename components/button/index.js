import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import incrementScoreCount from '../../lib/action';

class Button extends Component {
  render() {
    const minsToDisplay = () => {
      const timerCount= this.props.timer;
      if (timerCount > 119) {
        return '2';
      } else if (timerCount >= 60) {
        return '1';
      } else {
        return '0';
      }
    };

    const secondsToDisplay = () => {
      const timerCount= this.props.timer;
      if (timerCount == 120 || timerCount == 60) {
        return '00';
      } else if (timerCount > 69 && timerCount < 119) {
        return this.props.timer - 60;
      } else if (timerCount < 70 && timerCount > 60) {
        return `0${this.props.timer - 60}`;
      } else if (timerCount < 60 && timerCount > 10) {
        return this.props.timer;
      } else if (timerCount < 10) {
        return `0${this.props.timer}`;
      } else {
        return '00';
      }
    };
    
    const timeOrScoreJSX = this.props.isTimer ? (
      `${minsToDisplay()} : ${secondsToDisplay()}`
    ): this.props.score;

    console.log(this.props.isTimer);
    console.log(this.props.timer);

    return (
      <ImageBackground
      source={require('../../assets/gameBtn.png')}
      imageStyle={{resizeMode: 'contain'}}
      style={[this.props.style, styles.button]}>
        <Text>{timeOrScoreJSX}</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '30%',
    padding: '5%',
  },
});


const mapStateToProps = state => ({
  score: state.score,
  timer: state.timer,
});

const mapDispatchToProps = dispatch => ({
  incrementScore: () => dispatch(incrementScoreCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
