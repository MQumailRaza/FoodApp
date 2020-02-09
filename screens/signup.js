import React from 'react'
import { AppRegistry, StyleSheet, Text, View, ImageBackground,   Image,
  Platform,
  ScrollView,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage,KeyboardAvoidingView } from 'react-native'
import {Button,TextInput } from 'react-native-paper';
import { Container, Header, Content, Input, Item } from 'native-base';
import { Ionicons } from '@expo/vector-icons';


export default class Registerscreen extends React.Component{

constructor(props){

super(props);
this.state={

fullName:'',
emailAddress:'',
address:'',
phoneNumber:'',
password:'',

}

}


register(){


  console.log(this.state.fullName)
  console.log(this.state.emailAddress)
  console.log(this.state.address)
  console.log(this.state.phoneNumber)
  console.log(this.state.password)
this.props.navigation.navigate('Login')

}

render(){

return(

 

    <KeyboardAvoidingView behavior="padding" >
  <ImageBackground source={require('../assets/images/food.png.jpg')} style={{ width: '100%', height: '100%' }} >
 <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
 <Ionicons name="md-arrow-back" size={32} color="white" style={{marginTop:20,marginLeft:10}} />
 </TouchableOpacity>
 
  <View style={{
    justifyContent: 'flex-end',
    // flex:1,
    // marginBottom:20

    height: '88%',
    // backgroundColor:'yellow'
}}>

<View style={styles.landingBottomContainer}>

<Text style={{textAlign:'center'}} >  Get Your self Register</Text>


<View style={styles.textInput}>

<Input placeholder="Full Name" onChangeText={text => { this.setState({ fullName: text }) }} />
</View>
<View style={styles.textInput}>

<Input placeholder="Email Adress" onChangeText={text => { this.setState({ emailAddress: text }) }} />
</View>
<View style={styles.textInput}>

<Input placeholder=" Adress" onChangeText={text => { this.setState({ address: text }) }} />
</View>
<View style={styles.textInput}>

<Input placeholder="Phone Number" onChangeText={text => { this.setState({ phoneNumber: text }) }} />
</View>
<View style={styles.textInput}>

<Input secureTextEntry placeholder="Password" onChangeText={text => { this.setState({ password: text }) }} />
</View>

<View style={{ justifyContent: 'center', marginTop:20,width:'90%' }  }>

<Button  style={{}} mode="contained" onPress={() => this.register()}>
    Register
  </Button>

</View>



{/* <TextInput
        label='Full Name'
       
        onChangeText={text => this.setState({ text })}
      /> */}



  
        

     </View>

      </View>
     

      </ImageBackground>

      </KeyboardAvoidingView>
      
      
    
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
    textInput: {
      height: 50,
      borderWidth: 1,
      // borderColor: '#ccc', 
      borderColor: '#ccc',
      // backgroundColor: '#efefef', 
      // width: '90%', 
      padding: 4,
      marginTop: 10,
      // paddingBottom: 0 
    },
    landingBottomContainer: {
      backgroundColor: 'white',
      // height:'97%',
      padding: 20
      // justifyContent:'flex-end'
      // alignSelf:'baseline'
  
    },
  });
  