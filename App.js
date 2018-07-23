import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from './components/header';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './lib/reducer.js';
// import gameOver from '../../lib/action';


const store = createStore(reducer, { score: 0, timer: 9 });

export default class App extends React.Component {
  // countDownTimer = () => {
  //   let timeLeft = 120;

  //   gameTimer = setInterval(function(){
  //     timeLeft--;
  //     this.setState({
  //       seconds: 
  //     })
  //     if (timeLeft <= 0){
  //       clearInterval(gameTimer);
  //     }
  //   },1000);
  //   // setInterval()
  //   // const countDownDate

  //   // const stopTimer
  //   setTimeout(update, 1000);

  //   this.props.stopGame();
  // }
  
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header/>
          <Text>wHACK a mOLE aPP!</Text>
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
    // justifyContent: 'center',
  },
});

const mapDispatchToProps = dispatch => ({
  stopGame: () => dispatch(gameOver()),
})

