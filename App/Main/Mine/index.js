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

class MineCellItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        style={[this.props.style]}
        underlayColor='#c0c0c0'
        onPress = {this.props.onSelect}
      >
        <View style = {styles.cellContainer}>
          <View style = {styles.leftView}>
            <Image style={styles.cellIcon} source={this.props.cellIcon} />
            <Text style={styles.cellTitle}>{this.props.title}</Text>
          </View>
          <View>
            <Image style={styles.arrowIcon} source={require('../Img/arrow_more.png')} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class Mine extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f3f3f3'}} >
        <NavigationItem
          navigator={this.props.navigator}
          title='我的'
        />
        <ScrollView style={[styles.box, {backgroundColor: '#f3f3f3'}]}>
          <View style={styles.topContainer}>
            <View style={styles.userAvator}>
              <Image
                style={{width: 60, height: 60, borderRadius: 30}}
                source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                defaultSource = {{uri: 'placeholders'}}
              />
            </View>
            <View style={[styles.userInfo]}>
              <Text style={styles.userName}>奋撸的小鸟</Text>
              <Text style={styles.point}>积分：99</Text>
            </View>
          </View>
          <MineCellItem
            style={{marginTop: 15, height: 48}}
            onSelect={() => this._toCollection()}
            cellIcon={require('../Img/mall_my_favours.png')}
            title={'我的收藏'}
          />
          <MineCellItem
            style={{marginTop: 15, height: 48}}
            onSelect={() => this._toCollection()}
            cellIcon={require('../../Img/mall_distributionManage.png')}
            title={'成为分销'}
          />
          <MineCellItem
            style={{marginTop: 15, height: 48}}
            onSelect={() => this._toCollection()}
            cellIcon={require('../../Img/mall_adressManage.png')}
            title={'管理收货地址'}
          />
          <MineCellItem
            style={{marginTop: 15, height: 48}}
            onSelect={() => this._toCollection()}
            cellIcon={require('../../Img/mall_my_coupons.png')}
            title={'优惠券'}
          />
          <View style = {{height:15}}></View>
        </ScrollView>
      </View>
    );
  }

  _toCollection() {
    this.props.navigator.push({
      Title: '我的收藏aaa'
    });
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'column',
    backgroundColor: '#DCDCDC'
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    marginTop: 15,
    borderTopWidth: Util.pixel,
    borderBottomWidth: Util.pixel,
    borderColor: '#DCDCDC'
  },
  userAvator: {
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
    height: 80,
    paddingVertical: 15,
    paddingLeft: 10,
    justifyContent: 'space-between'
  },
  userName: {
    fontSize: 15,
    color: '#333333',
  },
  point: {
    fontSize: 14,
    color: '#ff7f50'
  },
  arrowIcon: {
    width: 8,
    height: 15,
  },
  cellContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: Util.pixel,
    borderTopWidth: Util.pixel,
    borderColor: '#DCDCDC',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cellIcon: {
    width: 22,
    height: 22,
  },
  cellTitle: {
    fontSize: 15,
    color: '#333333',
    marginLeft: 15,
  },

})
