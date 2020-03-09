import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Linking,Dimensions } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"


import CurvedNavBar from 'rn-curved-navigation-bar'

import App from './App'

const {height,width} = Dimensions.get('window')

export default class Main extends Component {
 
    state={
        page:1
    }
   

    render() {
        return (
      <View style={{backgroundColor:'white',flex:1}}>

            {this.state.page===1?<View style={{flex:1}}>
                <TouchableOpacity style={{alignSelf:'center',marginTop:200}} onPress={()=>{this.child(1)}} >
                    <Text style={{fontSize:20,fontWeight:'bold'}}>React Native Curved Nav Bar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={_=>{Linking.openURL('https://github.com/prashant9912/ReactNative_Curved_Navigation_Bar')}} style={{alignSelf:'center',alignItems:'center',marginTop:30}} >
                <Icon name="github" size={30}></Icon><Text>Open on Github</Text>
                </TouchableOpacity>
            </View>:null}

            {this.state.page===2?<View style={{flex:1}}>
                    <Text style={{fontSize:20,fontWeight:'bold',marginTop:height/2,alignSelf:"center"}}>Page 2</Text>
            </View>:null}

            {this.state.page===3?<View style={{flex:1}}>
                    <Text style={{fontSize:20,fontWeight:'bold',marginTop:height/2,alignSelf:"center"}}>Page 3</Text>
            </View>:null}

            {this.state.page===4?<View style={{flex:1}}>
                    <Text style={{fontSize:20,fontWeight:'bold',marginTop:height/2,alignSelf:"center"}}>Page 4</Text>
            </View>:null}

            {this.state.page===5?<View style={{flex:1}}>
                    <Text style={{fontSize:20,fontWeight:'bold',marginTop:height/2,alignSelf:"center"}}>Page 5</Text>
            </View>:null}


                    {/* <App icons={['plus','heart','airplane','call-split','account-heart']} selected={3} iconColor={'black'}  selectedIconColor="white" mainOffSet="0" /> */}
                    {/* <App icons={['air-horn','alarm','android-auto','auto-fix','bell-ring']} selected={3}  mainOffSetIos="20" /> */}

                    <CurvedNavBar icons={['air-horn','alarm','android-auto','auto-fix','bell-ring']} 
                    navColor={'#482ff7'}
                    cb={(id)=>{this.setState({page:id})}}
                     />

            </View>
        )
    }
}

const styles = StyleSheet.create({})
