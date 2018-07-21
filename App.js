import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import topBannerImage from './assets/game-screen-top.PNG';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./game-screen-top.png')}/>
        <Text>wHACK a mOLE aPP!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
