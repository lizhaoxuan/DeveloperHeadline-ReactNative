/**
 * 仿开发者头条Demo
 * 策划菜单布局
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  PropTypes,
  Text,
  Image,
  ToastAndroid,
  TouchableWithoutFeedback,
} = React;




var DrawerLayout = React.createClass({
  propTypes: {
    onItemClick: PropTypes.func,
  },

  _onItemClick:function(name){

    this.props.navigator.push({
        id: name,
        name: '开发者头条',
    });

  },

  render:function(){

    return (
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
          <TouchableWithoutFeedback onPress={ () => this._onItemClick('suggest') }>
            <View style={[styles.drawerItem]}>
              <Image source={require('image!two')}
                    style={styles.drawerItem_image} />
              <Text style={styles.drawerItem_text}>我的分享</Text>
              <Text style={styles.drawerItem_number}>0</Text>
            </View>
          </TouchableWithoutFeedback>

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
  }


});

var styles = StyleSheet.create({
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

module.exports = DrawerLayout;


