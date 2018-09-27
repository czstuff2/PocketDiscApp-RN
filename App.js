import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './components/home/navigator'

import { AppLoading, Font } from 'expo' 

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    await Font.loadAsync({
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    })
  }
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() =>  {
            console.log("Settings to isReady")
            this.setState({ isReady: true })}
          }
          onError={console.warn}
        />
      );
    }

    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
