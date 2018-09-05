/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView, 
  Dimensions,
  Button,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Page extends Component<Props> {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    const { width } = Dimensions.get('window');
    const height = width*(3/4);
    const videStyle = {width: width, height: height };

    return (
      <View style={styles.container}>

       <Text style={styles.welcome}>
          Welcome to React MyApp!
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>

        <Button title="Navigate to Video" 
                onPress={() =>
                  navigate('Video')
                }
        ></Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  innerContainer: {
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
  backgroundVideo: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    width: '100%',
    height:200
  },
  fakeContent: {
    height: 850,
    backgroundColor: "#CCC",
    paddingTop: 250,
    alignItems: "center",
 },
});
