'use strict'

import React, {
  Dimensions,
  PixelRatio,
  NativeModules,
  DeviceEventEmitter,
} from 'react-native';

const screen = Dimensions.get('window');

module.exports = {
  // 单位像素
  pixel: 1 / PixelRatio.get(),
  // 屏幕尺寸
  screenSize: {
    width: screen.width,
    height: screen.height
  },
  // 常用色值
  colors: {
    // 主基调
    base: '#F93',
    // 白色
    white: '#FFF',
    // 背景色
    background: '#f6f5f3',
    // 分割线
    line: '#E8E3DD',

    clickBg : '#DCDCDC88',
    title: '#333',
    subTitle:'#666666',
  },
}
