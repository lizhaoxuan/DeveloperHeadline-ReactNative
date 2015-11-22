/**
 * 仿开发者头条Demo
 * 主页
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var DrawerLayout = require('./drawerLayout');
var {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  Text,
  Image,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  ViewPagerAndroid,
} = React;


var DRAWER_REF = 'drawer';

var toolbarActions = [
  {title: '提醒', icon: require('image!ic_message_white'), show: 'always'},
  {title: '夜间模式', show: 'never'},
  {title: '设置选项', show: 'never'},
];





var MainView = React.createClass( {

  drawerLayout:function(){
    return (
      <DrawerLayout/>
    );
  },

  render:function() {
  
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}/>
    );
  },
  renderScene:function(route, navigator) {
  	
    return (
        
    <DrawerLayoutAndroid
      ref={DRAWER_REF}
      drawerWidth={270}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      keyboardDismissMode="on-drag"
      renderNavigationView={this.drawerLayout}>
      <ToolbarAndroid
            navIcon={require('image!ic_menu_white')}
            title="开发者头条"
            titleColor="white"
            style={styles.toolbar}
            actions={toolbarActions}
            //onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
            onActionSelected={this.onActionSelected} />
      <ViewPagerAndroid
        style={styles.container}
        initialPage={2}>

        

        <View style={styles.pageStyle}>

            <ViewPagerAndroid
              style={[styles.container,{flex:1,backgroundColor:'red'}]}
              initialPage={1}>
              <View style={styles.pageStyle}>
                <Text>子View 111</Text>
              </View>
              <View style={styles.pageStyle}>
                <Text>子View 222</Text>
              </View>
              <View style={styles.pageStyle}>
                <Text>子View 333</Text>
              </View>
            </ViewPagerAndroid>
            
          <Text style={{flex:1}}>First page</Text>
        </View>

        <View style={styles.pageStyle}>
          <Text>Second page</Text>
        </View>

        <View style={styles.pageStyle}>
          <Text>Three page</Text>
        </View>
      </ViewPagerAndroid>
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
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
});


module.exports = MainView;