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


export default class LoginScreen extends React.Component {


constructor(props){

super(props);
this.state={
email:'',
password:'',
showToast: false

}


}


login(){


    Toast.show({
        text: "successful",
    
        duration: 1000,
        position: "top",
        type: "success",
        textStyle: { color: "yellow" },
      })


 setTimeout(() => {
  
this.props.navigation.navigate('Home')   


 }, 1000);


}


    render() {

        return (


            <View>
<KeyboardAvoidingView behavior="padding" >
    
                <ImageBackground source={require('../assets/images/login.jpg')} style={{ width: '100%', height: '100%', }} >

                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                        <Ionicons name="md-arrow-back" size={32} color="white" style={{ marginTop: 20, marginLeft: 10 }} />
                    </TouchableOpacity>


                    <View style={{ position:'relative', height:'100%' }}>

                        <View style={{
                            height: '50%',
                            width:'100%',
                            bottom:0,
                            position:'absolute',
                            backgroundColor: 'white',
                            // backgroundColor:'yellow'
                        }}>
                            <View style={styles.landingBottomContainer}>
                            <Text style={{ textAlign: 'center', fontSize: 15 }} >Login here!</Text>

<View style={styles.textInput}>
                            <Input  placeholder="E-mail adress" onChangeText={text => { this.setState({ email: text }) }} />
                        
                        
                            </View>
                            <View style={styles.textInput}>
                                <Input secureTextEntry  placeholder="Password" onChangeText={text => { this.setState({ password: text }) }} />
                            </View>

                            <View style={styles.LoginButton}  >
                             {/* <Button  mode="contained" onPress={() => this.login()} >Login</Button> */}
                             <Button block light   onPress={() => this.login()} >
            <Text>Login</Text>
          </Button>
                            
                            </View>
                            <View style={styles.LoginButton}  >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                                    <Text style={{  textAlign: 'center', fontSize: 14, }}>Dont having account?</Text>
                                </TouchableOpacity>
</View>
                            </View>
                        </View>
                    </View>





                    

                </ImageBackground>

                </KeyboardAvoidingView>
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
    textInput: {
        height: 40,
        borderWidth: 1,
        // borderColor: '#ccc', 
        borderColor: '#ccc',
        // backgroundColor: '#efefef', 
        // width: '90%', 
        padding: 4,
        marginTop: 10,
        // paddingBottom: 0 
      },
      LoginButton: {
        height: 40,
     
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
})