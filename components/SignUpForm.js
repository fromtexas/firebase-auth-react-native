import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-pass-348dd.cloudfunctions.net';
export default class SignUpForm extends Component {

  state = { phone: '' };

  setPhone = (e) => {
    this.setState({phone: e})
  }

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, {phone: this.state.phone});
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {phone: this.state.phone});
    } catch (err) {
      console.log(err);
      this.setState({error: 'Something went wrong'});
    }
  }

  render () {
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
        <Button onPress={this.handleSubmit} title='Submit'/>
      </View>
    );
  }
}
