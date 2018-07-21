import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

class Button extends Component {
  render() {
    return (
      <Image
      source={require('../../assets/gameBtn.png')}>
        <Text>{this.props.data.score}</Text>
      </Image>
    );
  }
}