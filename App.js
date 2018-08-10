import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './app/components/home';
import LogIn from './app/components/log_in';
import SignUp from './app/components/sign_up';

const RootStack = createStackNavigator(
  {
    Home: {
      screen : Home,
      navigationOptions: {
        headerTitle: "reddit",
        headerStyle: {
          backgroundColor: "black",
        }, 
        headerTitleStyle: {
          // marginLeft: 150,
          flex: 1,
          // display: 'flex',
          // flexDirection: 'row',
          // alignItems: 'center',
          fontSize: 20,
          textAlign: 'center',
          color: 'white',
        }
      }
    },
    Login: {
      screen: LogIn,
      navigationOptions: {
        headerTitle: "reddit",
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: "black",
        }, 
        headerTitleStyle: {
          // marginLeft: 150,
          flex: 1,
          // display: 'flex',
          // flexDirection: 'row',
          // alignItems: 'center',
          fontSize: 20,
          textAlign: 'center',
          color: 'white',
        }
      }
    },
    Signup: SignUp
  }, {initialRouteName: 'Home'}
);

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}

 