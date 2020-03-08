import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Linking } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"

import App from './App'
export default class Main extends Component {
    render() {
        return (
      <View style={{backgroundColor:'white',flex:1}}>



                <TouchableOpacity style={{alignSelf:'center',marginTop:200}} >
                    <Text style={{fontSize:20,fontWeight:'bold'}}>React Native Curved Nav Bar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={_=>{Linking.openURL('https://google.com')}} style={{alignSelf:'center',alignItems:'center',marginTop:30}} >
                <Icon name="github" size={30}></Icon><Text>Open on Github</Text>
                </TouchableOpacity>
               
                
                    <App/>

            </View>
        )
    }
}

const styles = StyleSheet.create({})
