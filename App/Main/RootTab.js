'user strict';

import React , {
  Component,
  DeviceEventEmitter,
  Text,
  View,
  Image,
} from 'react-native';

import Util from '../Public/Util';
import TabNavigator from 'react-native-tab-navigator';
import Hot from './Hot';
import Topic from './Topic';
import Friend from './Friend';
import Mine from './Mine';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedTab: 'hot',
      tabBarHeigth: 50,
      cartCount: 0,
    };
  }
  _selectTab(tabName) {
    if (tabName === 'hot') {
      this.setState({
        selectedTab: tabName
      });
    }else if (tabName === 'topic') {
      this.setState({
        selectedTab: tabName
      });
    }else if (tabName === 'friend') {
      this.setState({
        selectedTab: tabName
      });
    }else if (tabName === 'mine') {
      this.setState({
        selectedTab: tabName
      });
    }
  }

  render() {
    return (
      <TabNavigator
        tabBarStyle={{height: this.state.tabBarHeigth, overflow: 'hidden'}}
        sceneStyle={{paddingBottom: this.state.tabBarHeigth}}
        tabBarShadowStyle={{top:0}} >

        <TabNavigator.Item
          title="热门"
          renderIcon={() => <Image style={styles.tab}
                      source={require('../Img/tabbar_mall.png')} />}
          renderSelectedIcon={() => <Image style={styles.tab}
                      source={require('../Img/tabbar_mall_selected.png')} />}
          selected={this.state.selectedTab === 'hot'}
          onPress={() => {this._selectTab('hot')}}
          selectedTitleStyle={{color:Util.colors.base}} >
          <Hot navigator = {this.props.navigator} />
        </TabNavigator.Item>

        <TabNavigator.Item
          title="专题"
          renderIcon={() => <Image style={styles.tab}
                      source={require('../Img/tabbar_topic.png')} />}
          renderSelectedIcon={() => <Image style={styles.tab}
                      source={require('../Img/tabbar_topic_selected.png')} />}
          selected={this.state.selectedTab === 'topic'}
          onPress={() => {this._selectTab('topic')}}
          selectedTitleStyle={{color: Util.colors.base}}>
          <Topic navigator = {this.props.navigator} />
        </TabNavigator.Item>

        <TabNavigator.Item
          title="好友"
          renderIcon={() => <Image style={styles.tab}
                      source={require('../Img/tabbar_distribution.png')} />}
          renderSelectedIcon={() => <Image style={styles.tab}
                      source={require('../Img/tabbar_distribution_selected.png')} />}
          selected={this.state.selectedTab === 'friend'}
          onPress={() => {this._selectTab('friend')}}
          selectedTitleStyle={{color: Util.colors.base}}>
          <Friend navigator = {this.props.navigator} />
        </TabNavigator.Item>

        <TabNavigator.Item
          title="我的"
          renderIcon={() => <Image style={styles.tab}
                      source={require('../Img/tabbar_mine.png')} />}
          renderSelectedIcon={() => <Image style={styles.tab}
                      source={require('../Img/tabbar_mine_selected.png')} />}
          selected={this.state.selectedTab === 'mine'}
          onPress={() => {this._selectTab('mine')}}
          selectedTitleStyle={{color: Util.colors.base}}>
          <Mine navigator = {this.props.navigator} />
        </TabNavigator.Item>

      </TabNavigator>
    );
  }
}
const styles = {
  tab: {
    width: 25,
    height: 25
  }
}
