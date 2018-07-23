import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Button from './components/button';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './lib/reducer.js';

const preLoadedState = {
  score: 0,
}

const store = createStore(reducer, preLoadedState);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ImageBackground
            source={require('./assets/game-screen-top.png')}
            style={{ width: '100%', height: '100%' }}/>
          <Text>wHACK a mOLE aPP!</Text>
        
          <Button/>
        </View>
      </Provider>
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
