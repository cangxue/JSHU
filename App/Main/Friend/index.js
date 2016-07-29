'use strict'

import React, {
  Component,
  View,
  Text,
} from 'react-native';

import styles from './style';

export default class Friend extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.content}>好友</Text>
      </View>
    );
  }
}
