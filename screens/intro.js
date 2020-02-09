import React from 'react'
import { AppRegistry, StyleSheet, Text, View, ImageBackground } from 'react-native'
import {Button} from 'react-native-paper';
import Swiper from 'react-native-web-swiper';
import { FontAwesome } from '@expo/vector-icons';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

swiperContainer :{
 
  justifyContent:'flex-end',paddingLeft:20, paddingBottom:10, height:'95%'


},

  slideContainer: {
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)',
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)',
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)',
  },
});
 
export default class Screen extends React.Component {
  render() {
    return (
     
<ImageBackground style={[{height:'100%'}]} source={require('../assets/images/background.jpg')} >


        <Swiper 
          controlsProps={{
            dotActiveStyle:{ backgroundColor: 'white', width: 8, height: 8 },

            prevTitle: '',
            nextTitle: '',
           
          }}
        >
          <View style={[styles.swiperContainer]}>
            <Text style={{color :'white',fontSize:20}}>Convert your </Text>
            <Text style={{color :'white',fontSize:20}}>passion into earning </Text>
            <Text style={{color :'white',fontSize:12, color: '#c3c3c3'}}> Earn while working in the comfort of your own home and doing what you love </Text>
          </View>
         <View style={[styles.swiperContainer]}>
         <Text style={{color :'white',fontSize:20}}>Convert your </Text>
            <Text style={{color :'white',fontSize:20}}>passion into earning </Text>
            <Text style={{color :'white',fontSize:12, color: '#c3c3c3'}}> Earn while working in the comfort of your own home and doing what you love </Text>
       
          </View>
         <View style={[styles.swiperContainer]}>
         <Text style={{color :'white',fontSize:20}}>Convert your </Text>
            <Text style={{color :'white',fontSize:20}}>passion into earning </Text>
            <Text style={{color :'white',fontSize:12, color: '#c3c3c3'}}> Earn while working in the comfort of your own home and doing what you love </Text>
       
          </View>
        </Swiper>
        <View style={{ justifyContent: 'center',width:'40%' }} style={{alignSelf: 'center', margin:20}} >
      
   
        <Button  mode="contained"  color ='orange' dark='1' onPress={() => this.props.navigation.navigate('Signup')}>
    Become a chef
  </Button>
  </View>
        </ImageBackground>

      
    );
  }
}