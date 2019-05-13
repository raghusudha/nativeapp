import React, { Component } from 'react';
import { View,Text,StyleSheet  } from 'react-native';
import LoginComponent from './logincomponent';
 
export default class SplashScreen extends Component{
    constructor(props){
    super();
    }
    render(){
        return(
            <View style={styles.container}>
            
            <Text style={styles.textStyles}>
              Splash Screen
            </Text>
            {/* <LoginComponent/> */}
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
   backgroundColor: 'orange' ,
       
      },

  textStyles : {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
});