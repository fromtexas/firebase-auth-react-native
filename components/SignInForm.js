import React, {Component} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-pass-348dd.cloudfunctions.net';

export default class SignInForm extends Component{
  state = {
    phone: '',
    code: ''
  }

  setPhone = (phone) => {
    this.setState({phone})
  }

  setCode = (code) => {
    this.setState({code})
  }

  handleSubmit =  async () => {
    try {
      let {data} = await axios.post(`${ROOT_URL}/verifyOneTimePassword`,{phone: this.state.phone, code: this.state.code});
      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
      this.setState({error: err});
    }
  }

  render() {
    return (
      <View>
        <View style={{marginBottom: 10}}>
            <FormLabel>
              Enter Phone Number
            </FormLabel>
            <FormInput
            value = {this.state.phone}
            onChangeText = {this.setPhone}
            />
        </View>
        <View style={{marginBottom: 10}}>
            <FormLabel>
              Enter Code
            </FormLabel>
            <FormInput
            value = {this.state.code}
            onChangeText = {this.setCode}
            />
        </View>
        <Button onPress={this.handleSubmit} title='Submit'/>
      </View>
    );
  }
}
