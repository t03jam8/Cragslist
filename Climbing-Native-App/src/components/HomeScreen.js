import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  home: {
    overflow: 'visible',
    backgroundColor: 'white',
    height: 40,
  },
  hometext: {
    fontSize: 20,
    color: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagecontainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  backgroundimage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    overflow: 'visible',
    backgroundColor: 'powderblue',

  }
});


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image style={styles.backgroundimage} source={{uri: 'https://s3-eu-west-1.amazonaws.com/climbing-kd/custom/rocks.png'}} />
        </View>
        <View style={styles.home}>
          <Text style={styles.hometext}>Hello, Navigation!</Text>
        </View>
    </View>
  );
  }
}
