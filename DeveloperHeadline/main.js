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
  TouchableWithoutFeedback,
} = React;

var request_url = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json";
var DRAWER_REF = 'drawer';
var _navigator;
var toolbarActions = [
  {title: '提醒', icon: require('image!ic_message_white'), show: 'always'},
  {title: '夜间模式', show: 'never'},
  {title: '设置选项', show: 'never'},
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

  drawerLayout:function(){
    return (
      <DrawerLayout
        navigator={this.props.navigator}/>
    );
  },

  onDrawerItenClick:function(name){
      this.props.navigator.push({
        id: name,
        name: '开发者头条',
    });
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
  	_navigator = navigator;
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
            <ListView
              style={{flex:4}}
              dataSource={this.state.dataSource}
              renderRow={this.renderItem}/>
       


    </DrawerLayoutAndroid>
    );
  },
  renderItem: function(movie) {
    // var mockData = {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}};
    return (
      <View style={styles.container}>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
          <Text>{movie.title}</Text>
          <Text>{movie.year}</Text>
        </View>
      </View>
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
  title: {
    flex: 3,
    fontSize: 18,
    textAlign: 'left',
    color: '#aaaaaa',
  },
  time: {
    flex: 1,
    textAlign: 'right',
    color: '#aaaaaa',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    width: 53,
    height: 81
  }

});


module.exports = MainView;