import React from 'react';
import { View } from 'react-native';
import MyGroups from './src/components/MyGroups';
import {AppRegistry} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}> 
        <MyGroups/>
      </View>
    )
  }
}