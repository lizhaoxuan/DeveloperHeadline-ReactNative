/**
 * 仿开发者头条Demo
 * 文章页面
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

        
      </View>
    );
  }


});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent :'flex-start',
  },

});

module.exports = DrawerLayout;


