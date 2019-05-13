import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RouteConfig from './components/routes';
import SplashScreen from './components/splashscreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = { isLoading: true }
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        10000
      )
    );
  }
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen/>;
    }
  
    return (
      <RouteConfig/>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
