import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Linking } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"

import App from './App'
export default class Main extends Component {
 
    state={
        a:1
    }
   

    render() {
        return (
      <View style={{backgroundColor:'white',flex:1}}>

                <TouchableOpacity style={{alignSelf:'center',marginTop:200}} onPress={()=>{this.child(1)}} >
                    <Text style={{fontSize:20,fontWeight:'bold'}}>React Native Curved Nav Bar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={_=>{Linking.openURL('https://github.com/prashant9912/ReactNative_Curved_Navigation_Bar')}} style={{alignSelf:'center',alignItems:'center',marginTop:30}} >
                <Icon name="github" size={30}></Icon><Text>Open on Github</Text>
                </TouchableOpacity>
               
                
                    <App icons={['plus','heart','airplane','call-split','account-heart']} selected={3} iconColor={'black'} navColor={'red'} selectedIconColor="white" mainOffSet="0" 
                    />

            </View>
        )
    }
}

const styles = StyleSheet.create({})
