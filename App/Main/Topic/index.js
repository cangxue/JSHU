'use strict'

import React, {
  Component,
  View,
  Text,
} from 'react-native';

import styles from './style';

export default class Topic extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.content}>主题</Text>
      </View>
    );
  }
}
