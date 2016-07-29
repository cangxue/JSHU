'use strict';

import React, {
  Component
} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  NativeModules
} from 'react-native';

import Util from './Util';

const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;
const NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;

const RNMallManager = NativeModules.RNMallManager;

export default class NavigationItem extends Component {
  static defaultProps = {
    backgroundColor: Util.colors.base,
  };

  render() {
    let leftComponent = this.props.leftComponent || (<Image source={{uri: 'back'}} resizeMode={Image.resizeMode.cover} style={styles.arrow} />);

    const onLeftPress = this.props.onLeftPress ? this.props.onLeftPress :
      () => {
        let _navigator = this.props.navigator;
        if (!_navigator) {
          console.log('Need navigator object to nav back');
        }
        if (_navigator.getCurrentRoutes().length > 1) {
          _navigator.pop();
        } else {
          RNMallManager.backClicked();
        }
      };

    return (
      <View style={[styles.navBarContainer, {backgroundColor:this.props.backgroundColor}, {position: this.props.position}, {height: NAV_HEIGHT}]}>
        <TouchableOpacity style={[styles.leftContainer]} onPress={onLeftPress} >
          {leftComponent}
        </TouchableOpacity>

        {
          this.props.title &&
          <View style={styles.titleContainer}>
            <Text style={[styles.titleText]}>{this.props.title}</Text>
          </View>
        }

        {
          this.props.rightComponent &&
          <TouchableOpacity style={[styles.rightContainer]} onPress={this.props.onRightPress}>
            {this.props.rightComponent}
          </TouchableOpacity>
        }
      </View>
    );
  }
}

var styles = {
  navBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  leftContainer: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT,
    left: 0,
    overflow: 'hidden',
    opacity: 1,
    height: NAV_BAR_HEIGHT,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  rightContainer: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT,
    right: 0,
    overflow: 'hidden',
    opacity: 1,
    alignItems: 'flex-end',
    height: NAV_BAR_HEIGHT,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  titleContainer: {
    top: STATUS_BAR_HEIGHT,
    height: NAV_BAR_HEIGHT,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  arrow: {
    width: 30,
    height: 30,
    justifycontent: 'center'
  }
}
