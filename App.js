import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from './components/header';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './lib/reducer.js';
import Game from './components/game';
// import gameOver from '../../lib/action';

const store = createStore(reducer, { score: 100, timer: 3 });

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Game/>
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
  },
});