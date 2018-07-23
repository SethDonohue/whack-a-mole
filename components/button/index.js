import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import incrementScoreCount from '../../lib/action';

class Button extends Component {
  render() {
    return (
      <ImageBackground
      source={require('../../assets/gameBtn.png')}
      imageStyle={{resizeMode: 'stretch'}}
      style={{width: '60%', height: '20%'}}>
        <Text>Score: {this.props.score}</Text>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  score: state.score,
});

const mapDispatchToProps = dispatch => ({
  incrementScore: () => dispatch(incrementScoreCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
