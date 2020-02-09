import React from 'react'
import {
    AppRegistry, StyleSheet, Text, View, ImageBackground, Image,
    Platform,
    ScrollView,
    FlatList,
    TouchableHighlight,
    TouchableOpacity,
    AsyncStorage, KeyboardAvoidingView
} from 'react-native'
import {  TextInput } from 'react-native-paper';
import { Container, Header, Content, Input, Item, Toast,Button,Root } from 'native-base';
import { Ionicons } from '@expo/vector-icons';




export default class SettingScreen extends React.Component{


render(){
return(

<View style={styles.container} >


<Text>SettingScreen</Text>
</View>

)

}

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  



