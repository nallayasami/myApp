/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Video from 'react-native-video';

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
export default class VideoPlayer extends Component<Props> {

  static navigationOptions = {
    title: 'Video',
  };
 
  constructor(props) {
    super(props);
    this.state = {
    videoStyle: {
      width:'100%',
      height:300
    }, 
    currentValue: 'empty'
  };
  }

  minimizeVideo = () => {
    const {height, width} = Dimensions.get("window");
    const fromTop = height - 220;
    const fromLeft = width / 2 ;
    this.setState({videoStyle: {
      position: 'absolute',
      top:fromTop,
      left:fromLeft,
      width:'50%',
      height:150,
      zIndex: 1, 
    },
    currentValue: fromTop
  });
  }

  render() {
    const { width } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Button title="Minimize Video" onPress={this.minimizeVideo}></Button>
        <Video source={{uri: "http://techslides.com/demos/sample-videos/small.mp4"}}
              repeat
              style={this.state.videoStyle}/>
        <ScrollView>
          <Text>{this.state.currentValue}</Text>
          <Text>Fake content 1</Text>
          <View style={styles.fakeContent}></View>
          <Text>Fake content 2</Text>
          <View style={styles.fakeContent}></View>
          <Text>Fake content End</Text>
        </ScrollView>
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
  backgroundVideo: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    width: '100%',
    height:300
  },
  fakeContent: {
    height: 850,
    backgroundColor: "#CCC",
    paddingTop: 250,
    alignItems: "center",
 },
});
