/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 'use strict';

 import React, {
   AppRegistry,
   Component
 } from 'react-native';

 import Login from './App/Login/Login';
 import Hot from './App/Main/Hot';
 import RootTab from './App/Main/RootTab';

 class JSHU extends Component {
   render() {
     return (
      //  <Login />
      <RootTab />
     );
   }
 }

 AppRegistry.registerComponent('JSHU', () => JSHU);
