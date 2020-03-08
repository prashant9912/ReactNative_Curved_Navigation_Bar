import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions } from 'react-native'
import MaskedView from '@react-native-community/masked-view';

const {height,width} = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#4687FD',flex:1}}>

    
      
      
       



      {/* <View style={{backgroundColor:'white',position:'absolute',
      bottom:-20,
      width:width,height:100}}>
        </View> */}

      

        <View style={{backgroundColor:'white',position:'absolute',
      bottom:-37,
      width:width,height:100}}>
        </View>

       
        <View style={{backgroundColor:'pink',position:'absolute',
        //bottom:70,width:50,right:58.5,
        bottom:65.5,width:45,right:61.8,
        height:50,
        borderRadius:40}}></View>
{/* 
        <View style={{
          position:'absolute',
        bottom:66,right:61,
          width:47,height:20,
          borderBottomLeftRadius:40,borderBottomRightRadius:40,borderColor:'green',opacity:0.3,
borderWidth:2,borderTopColor:'transparent'}}></View> */}



<View style={{
          position:'absolute',
        bottom:58,right:55.7,
          width:57.6,height:30,
          borderBottomLeftRadius:40,borderBottomRightRadius:40,borderColor:'white',
borderWidth:8,borderTopColor:'transparent'}}></View>





        {/* <View style={{backgroundColor:'transparent'
        ,position:'absolute',
        //bottom:70,width:50,right:58.5,
        //bottom:55,right:52,
        bottom:54,right:50,
        width:70,
        height:80,
        borderRadius:90,
        borderWidth:10,
        borderColor:'white',
        borderLeftColor:'transparent',borderRightColor:'transparent'
        ,borderTopColor:'transparent'

        }}></View> */}

        
        <View style={{backgroundColor:'white',position:'absolute',bottom:0,right:100,width:width,height:100,
        //borderRadius:35
        borderRadius:40
        }}></View>

      <View style={{backgroundColor:'white',position:'absolute',bottom:0,right:-345,width:width,height:100,
        //borderRadius:35
        borderRadius:40
        }}></View>


      </View>
    )
  }
}


const styles = StyleSheet.create({})
8