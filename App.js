import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount () {
    const config = {
     apiKey: "AIzaSyBgdY3BQ8ow4LO-B6AOIVvsphjXahVXVZo",
     authDomain: "one-time-pass-348dd.firebaseapp.com",
     databaseURL: "https://one-time-pass-348dd.firebaseio.com",
     projectId: "one-time-pass-348dd",
     storageBucket: "one-time-pass-348dd.appspot.com",
     messagingSenderId: "740079448633"
   };
   firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm/>
        <SignInForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
