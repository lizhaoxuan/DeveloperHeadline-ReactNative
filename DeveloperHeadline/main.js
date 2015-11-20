/**
 * 仿开发者头条Demo
 * 主页
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  Text,
  Image,
  DrawerLayoutAndroid,
  ToolbarAndroid,
} = React;


var DRAWER_REF = 'drawer';

var toolbarActions = [
  {title: '提醒', icon: require('image!ic_message_white'), show: 'always'},
  {title: '夜间模式', show: 'never'},
  {title: '设置选项', show: 'never'},
];

var MainView = React.createClass( {

  render:function() {
  
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}/>
    );
  },
  renderScene:function(route, navigator) {
  	var navigationView = (
	    <View style={{flex: 1, backgroundColor: '#fff'}}>
	      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
	    </View>
	);
    return (
        
    <DrawerLayoutAndroid
      ref={DRAWER_REF}
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      keyboardDismissMode="on-drag"
      renderNavigationView={() => navigationView}>
      <ToolbarAndroid
            navIcon={require('image!ic_menu_white')}
            title="开发者头条"
            titleColor="white"
            style={styles.toolbar}
            actions={toolbarActions}
            //onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
            onActionSelected={this.onActionSelected} />
      <View style={{flex: 1, alignItems: 'center',backgroundColor:'white'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
      </View>
    </DrawerLayoutAndroid>
    );
  },
  
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems :'flex-start',
    justifyContent:'flex-start',
    backgroundColor:'white',
  },
  toolbar: {
    backgroundColor: '#00B2EE',
    height: 56,
    fontSize: 25,
    alignItems: 'center',
    justifyContent :'space-between',
  }
});


module.exports = MainView;