import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';

export default class AppHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Attendance App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'red',
    height:50,
    justifyContent:'center',
    alignItems:'center'
  }
})