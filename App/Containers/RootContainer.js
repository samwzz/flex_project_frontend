import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';

class RootContainer extends Component {
  render() {
    return(
      <View>
        <Header headerText={"See-n-Me"} />
      </View>
    );
  }
}

export default RootContainer;
