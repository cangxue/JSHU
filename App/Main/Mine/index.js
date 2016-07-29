'use strict'

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
  DeviceEventEmitter,
  NativeModules
} from 'react-native';

import Util from '../../Public/Util';
import NavigationItem from '../../Public/NavigationItem';

const RNManager = NativeModules.RNManager;

export default class Mine extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f3f3f3'}} >
        <NavigationItem
          navigator={this.props.navigator}
          title='我的'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {

  }
})
