import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AppHeader from '../components/appheader';

export default class BuzzerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c7c4',
  },
});
