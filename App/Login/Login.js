'use strict';

import React, {
  Component,
  View,
  Text,
  Image,
  PixelRatio,
  TextInput,
} from 'react-native';

import styles from './style';

export default class Login extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.style_image}
            source={require('../Img/login.png')} />
        <TextInput
          style={styles.inputStyle}
          placeholder='QQ号/手机号/邮箱'
          numberOfLines={1}
          autoFocus={true}
          textAlign='center'
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='密码'
          numberOfLines={1}
          autoFocus={true}
          textAlign='center'
        />
        <View style={styles.submit}>
          <Text style={{color:'#fff'}}>
            登陆
          </Text>
        </View>
        <View style={styles.noSubmit}>
          <Text style={styles.noLogin}>
            无法登陆
          </Text>
          <Text style={styles.newUser}>
            新用户
          </Text>
        </View>
      </View>
    );
  }
}
