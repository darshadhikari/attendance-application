import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/appheader';

export default class HomeScreen extends React.Component {
  gotoSummaryScreen = () => {
    this.props.navigation.navigate('Summaryscreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <AppHeader />

        <View style={styles.studentContainer}>
          <Text style={styles.student}>1. Anjali</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Absent</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.studentContainer}>
          <Text style={styles.student}>2. Rupin</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Absent</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.studentContainer}>
          <Text style={styles.student}>3. Aish</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Absent</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.submitbutton}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c7c4',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 5,
    borderRadius: 15,
    backgroundColor:'green',
    width:100,
  },
  button2:{
        height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 5,
    borderRadius: 15,
    backgroundColor:'red',
    width:100,
  },
  buttonText: {
    fontFamily: 'monospace',
    fontSize: 20,
    color: '#708776',
  },
  studentContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  student:{
    marginRight: 40,
    fontFamily: 'monospace',
    fontSize: 20,
    marginLeft:20
  },
  submitbutton:{
         height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 5,
    borderRadius: 15,
    backgroundColor:'yellow',
    width:100,
  }
});
