'use strict';

import Util from '../Public/Util';

module.exports = {
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  style_image: {
    borderRadius: 35,
    height: 70,
    width: 70,
    marginTop: 64,
    alignSelf: 'center'
  },
  inputStyle: {
    backgroundColor:'#fff',
    marginTop:10,
    height:35,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 4,
    borderColor: '#C2C2C2',
    borderWidth: Util.pixel,
    paddingLeft: 10,
    paddingVertical: 7,
    fontSize: 13,
  },
  submit: {
    // backgroundColor:Util.colors.clickBg,
    backgroundColor: '#63B8FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    marginTop: 30,
    marginLeft:12,
    marginRight:12,
  },
  noSubmit: {
    flex:1,
    flexDirection:'row',
    marginTop:10
  },
  noLogin: {
    fontSize: 12,
    color: '#63B8FF',
    marginLeft: 12,
  },
  newUser: {
    fontSize: 12,
    color: '#63B8FF',
    marginRight: 12,
    flex: 1,
    textAlign: 'right',
  }
}
