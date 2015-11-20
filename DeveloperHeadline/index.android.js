/**
 * 仿开发者头条Demo
 * 首页Loading
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TimerMixin = require('react-timer-mixin');


var Main = require('./main');


var {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  Image,
  BackAndroid,
  Text,
  ToolbarAndroid,
} = React;

/** 返回事件监听 **/
var _navigator = null;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length == 2) {
    return false;
  }else if(_navigator && _navigator.getCurrentRoutes().length > 1){
    _navigator.pop();
    return true;
  }

  return false;
});


var DeveloperHeadline = React.createClass({
  render: function() {
    return (
      <Navigator
          style={styles.container}
          initialRoute={{id: 'loading', name: 'Loading',index:0}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }} />
    );
  },

  mixins: [TimerMixin],
  componentDidMount: function() {
   this.setTimeout(
     () => { 
        _navigator.push({
        id: 'main',
        name: '开发者头条',
    });
     },
     2000
   ); 
  },


/**创建导航器列表**/
renderScene:function(route, navigator) {
    _navigator = navigator;
    var routeId = route.id
    if (routeId == 'loading') {
      return (
        <View style={styles.container}>
          <Image source={require('image!ic_launcher')}
                style={styles.loading} />
        </View>
      );
    }else if (routeId == 'main'){
      return (
        <View style={styles.container}>
          <Main  navigator={navigator} />
        </View>
      );
    }

  },








});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00B2EE',
    justifyContent:'center',
  },
  loading: {
    width: 100,
    height: 100 ,
    alignSelf:'center',
  },
  toolbar: {
    backgroundColor: '#00B2EE',
    height: 56,
    fontSize: 25,
    alignItems: 'center',
    justifyContent :'space-between',
  },
});

AppRegistry.registerComponent('DeveloperHeadline', () => DeveloperHeadline);
