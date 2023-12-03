import React, {Component} from 'react';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

import HomeScreen from "./screen/homescreen.js";
import Summaryscreen from "./screen/summaryscreen";


export default function App() {
  return (
    <AppContainer/>
  );
}

var AppNavigator=createSwitchNavigator({
  homescreen:HomeScreen,
  summaryscreen:Summaryscreen
})
const AppContainer=createAppContainer(AppNavigator)
