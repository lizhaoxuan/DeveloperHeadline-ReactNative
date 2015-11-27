'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  Navigator,
} = React;

var styles = StyleSheet.create({
  container: {
    alignItems :'flex-start',
    justifyContent:'flex-start',
    flex: 1,
  },
  default: {
    height: 100,
    borderWidth: 0.5,
    flex:1,
    borderColor: '#0f0f0f',
    padding: 4,
    fontSize: 13,
  },
  items_layout: {
    flexDirection: 'row' ,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderColor:'#FFFFFF',
    borderBottomColor: '#EBEBEB',
    borderWidth: 1,
  },
});


var inputText = '';

var Suggest = React.createClass( {


  

  onclickd:function(){
    if(inputText == ''){
      ToastAndroid.show('输入内容为空', ToastAndroid.SHORT);
    }else{
      ToastAndroid.show(inputText, ToastAndroid.SHORT);
    }
    
    
  },

  onSearchTextChanged:function(event) {
    inputText =  event.nativeEvent.text;
  },

  render:function() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}/>

    );
  },
  renderScene:function(route, navigator) {
    return (
        
      <View style={styles.container}>
          <TextInput
            autoCapitalize="none"
            placeholder="请描述你的问题或建议，我们将及时跟进与解决"
            textAlignVertical= "top"
            underlineColorAndroid = "transparent"  //android需要设置下划线为透明才能去掉下划线
            onChange={this.onSearchTextChanged.bind(this)}
            multiline = {true}
            style={styles.default}/>

          <TouchableOpacity  
              onPress={()=>this.onclickd()}>          
          <View style={[styles.items_layout]}>
            
            <Text style={styles.items_text}>
              提交
            </Text>
          </View>
          </TouchableOpacity>


      </View>
      
    );
  },
  
});


module.exports = Suggest;