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
	     <View style={styles.drawerLayout}>

          <View style={styles.drawerTop}>
            <Image source={require('image!one')}
                  style={{width: 75, height: 75 ,marginLeft: 10 , marginTop: 20 ,}} />
            <Text style={{marginLeft: 10,marginTop: 13,fontSize: 20, textAlign: 'left',color : 'white'}}>暴打小女孩</Text>
            <Text style={{marginLeft: 10,marginTop: 1, fontSize: 16, textAlign: 'left',color : 'white'}}>关注 0 | 关注者 0</Text>
            <Text style={{marginLeft: 10,marginTop:8, fontSize: 17, textAlign: 'left',color : 'white'}}>这个人很懒，什么都没有写</Text>
          </View>

          
          <View style = {styles.drawerCenter}>

            <View style={[styles.drawerItem,{height : 50 ,justifyContent :'flex-start',backgroundColor:'#EDEDED',marginTop:7,}]}>
              <Image source={require('image!two')}
                    style={styles.drawerItem_image} />
              <Text style={[styles.drawerItem_text,{color : '#1C86EE'}]}>首页</Text>
            </View>

            <Text style={[styles.line,{marginTop:7}]}/>

            <View style={[styles.drawerItem]}>
              <Image source={require('image!two')}
                    style={styles.drawerItem_image} />
              <Text style={styles.drawerItem_text}>我的分享</Text>
              <Text style={styles.drawerItem_number}>0</Text>
            </View>

            <View style={[styles.drawerItem]}>
              <Image source={require('image!two')}
                    style={styles.drawerItem_image} />
              <Text style={styles.drawerItem_text}>我的创建的主题</Text>
              <Text style={styles.drawerItem_number}>0</Text>
            </View>
           
            <View style={[styles.drawerItem]}>
              <Image source={require('image!two')}
                    style={styles.drawerItem_image} />
              <Text style={styles.drawerItem_text}>我订阅的主题</Text>
              <Text style={styles.drawerItem_number}>0</Text>
            </View>

            <View style={[styles.drawerItem]}>
              <Image source={require('image!two')}
                    style={styles.drawerItem_image} />
              <Text style={styles.drawerItem_text}>我的收藏</Text>
              <Text style={styles.drawerItem_number}>0</Text>
            </View>
            

            <Text style={styles.line}/>

            <View style={[styles.drawerItem]}>
              <Image source={require('image!two')}
                    style={styles.drawerItem_image} />
              <Text style={styles.drawerItem_text}>意见反馈</Text>
              <Text style={styles.drawerItem_number}>0</Text>
            </View>

            <View style={[styles.drawerItem]}>
              <Image source={require('image!two')}
                    style={styles.drawerItem_image} />
              <Text style={styles.drawerItem_text}>设置</Text>
              <Text style={styles.drawerItem_number}>0</Text>
            </View>

            
            

          </View>
        </View>
	  );
    return (
        
    <DrawerLayoutAndroid
      ref={DRAWER_REF}
      drawerWidth={270}
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
  },
  drawerLayout:{
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    justifyContent :'flex-start',

  },
  drawerTop:{
    flex: 1,
    backgroundColor: '#00B2EE',
    flexDirection:'column',
    paddingBottom:18,
  },
  drawerCenter:{
    flex: 2,
    backgroundColor: 'white',
    flexDirection:'column',
  },
  drawerItem:{
    flexDirection:'row',
    height: 35,
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
    paddingLeft: 10,
  },
  drawerItem_image:{
    width: 30, 
    height: 30 , 
    marginRight: 20 ,
  },
  drawerItem_text:{
    flex:3,
    marginLeft: 10,
    fontSize: 18 ,
    textAlign: 'left',
  },
  drawerItem_number:{
    marginRight: 10, 
    fontSize: 18,
  },
  line:{
    height:1,
    backgroundColor:'#EDEDED',
    marginTop:10,
  },
});


module.exports = MainView;