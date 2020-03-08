import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, ViewBase } from 'react-native';


// You can import from local files


// or any pure javascript modules available in npm


export default class New extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
       {/* <View style={{height:100,width:100,borderRadius:100,borderWidth:10,borderTopColor:'transparent',borderLeftColor:'transparent',borderRightColor:'transparent'}}> */}
{/* <View style={{width:150,height:100,borderBottomLeftRadius:110,borderBottomRightRadius:110,borderColor:'black',
borderWidth:20,borderTopColor:'transparent'}}>  */}


    </View>
  );
}
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'pink',
    padding: 8,
  },
  

});


