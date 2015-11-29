/**
 * 仿开发者头条Demo
 * 主页
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var DrawerLayout = require('./drawerLayout');
var SwipeRefreshLayoutAndroid = require('./SwipeRefreshLayout');



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
  ListView, 
  ToastAndroid, 
  TouchableOpacity,
} = React;

var request_url = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json";
var DRAWER_REF = 'drawer';


var toolbarActions = [
  {title: '添加', icon: require('image!ic_message_white'), show: 'always'},
  {title: '查找', icon: require('image!ic_favorites_white'), show: 'always'},
];





var MainView = React.createClass( {
  

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  },
  componentDidMount: function() {
    // fetch Data
    fetch(request_url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true
        });
      })
      .done();
  },

  onItemClick:function(position){
      ToastAndroid.show("点击了："+position, ToastAndroid.SHORT);
      this.props.navigator.push({
        id: 'content',
        name: '开发者头条',
      });
  }
  drawerLayout:function(){
    return (
      <DrawerLayout
        navigator={this.props.navigator}/>
    );
  },

  onDrawerItemClick:function(){
      this.drawer.openDrawer();
  },

  onActionSelected: function(position) {
      ToastAndroid.show(position.toString(), ToastAndroid.SHORT);

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
      ref={(drawer) => { this.drawer = drawer; }}
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
            onIconClicked={this.onDrawerItemClick}
            onActionSelected={this.onActionSelected} />

            <ViewPagerAndroid
              style={[styles.container,{flex:2}]}
              initialPage={1}>

              <View style={styles.pageStyle}>
                <Image style={styles.pagerImage} source={require('image!splash_logo')} >
                  <Text style={styles.pagerText}>一周IT技术干货(码农周刊第95期)</Text>
                </Image>
              </View>
              <View style={styles.pageStyle}>
                <Image style={styles.pagerImage} source={require('image!splash_logo')} >
                  <Text style={styles.pagerText}>二周IT技术干货(码农周刊第95期)</Text>
                </Image>
              </View>
              <View style={styles.pageStyle}>
                <Image style={styles.pagerImage} source={require('image!splash_logo')} >
                  <Text style={styles.pagerText}>三周IT技术干货(码农周刊第95期)</Text>
                </Image>
              </View>
            </ViewPagerAndroid>             
            <ListView
              style={{flex:4 ,backgroundColor:'white'}}
              dataSource={this.state.dataSource}
              renderRow={this.renderItem}/>
       


    </DrawerLayoutAndroid>
    );
  },
  renderItem: function(movie) {
    // var mockData = {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}};
            // <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
        // <View style={styles.rightContainer}>
        //   <Text>{movie.title}</Text>
        //   <Text>{movie.year}</Text>
        // </View>
    return (
      <TouchableOpacity onPress={ () => this.onItemClick('suggest') }>
      <View style={styles.itemLayout}>
        <View style={ {flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between'}}>
          <Text style={styles.itemTitle}>{movie.title}</Text>
          <Image style={styles.itemImge} source={require('image!two')} />
        </View>
        <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',marginTop:5,}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Image style={styles.itemIcon} source={require('image!one')} />
            <Text style={styles.itemText}>10</Text>
            <Image style={[styles.itemIcon,{marginLeft: 10}]} source={require('image!three')} />
            <Text style={styles.itemText}>28</Text>
          </View>
          
          <Text style={styles.itemText}>选自编程派</Text>
        </View>
      </View>
       </TouchableOpacity>
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
    backgroundColor: 'red',
  },
  itemLayout: {
    padding: 10,
    flexWrap: 'nowrap',
  },
  itemTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemImge: {
    width: 50,
    height: 50,
  },
  itemIcon:{
    width: 20,
    height: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  itemText:{
    color: 'gray',
  },
  pagerImage:{
    flex:1,
    justifyContent :'flex-end',
  },
  pagerText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    
  },

});


module.exports = MainView;