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
import { Container, Header, Content, Input, Item, Left, Body, Right, Button, Icon, Title , List, ListItem,Label  } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Avatar, Card, Paragraph  } from 'react-native-paper';
import Constants from 'expo-constants'
export default class HomeScreen extends React.Component{
    
    

render(){

    return(
<View style={styles.container}  >

<Header style={{backgroundColor:'#03a9fc'}} >
          <Left>
          <Button transparent  onPress={()=>this.props.navigation.toggleDrawer()} >
              <Icon name='menu'  style={{color:'white'}} />
            </Button>
          </Left>
          <Body style={{alignContent:'center'}} >


<Text style={{color:'white',fontSize:20}} >Home screen</Text>

          </Body>

        
            
          
         
        </Header>

        <Card style={{margin:20}}>
    <Card.Title title="MENU"  />
    <Card.Content>
     
    <List>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View>
    <ListItem>
              <Text>Name</Text>
            </ListItem>
            <ListItem>
              <Text>Daal</Text>
            </ListItem>
            <ListItem>
              <Text>Sabzi</Text>
            </ListItem>
            <ListItem>
              <Text>Biryani</Text>
            </ListItem>
            </View>

            <View>
            <ListItem >
              <Text>Quantity</Text>
            </ListItem>
            <ListItem>
              <Text>2</Text>
            </ListItem>
            <ListItem>
              <Text>5</Text>
            </ListItem>
            <ListItem>
              <Text>3</Text>
            </ListItem>
            </View>
            </View>
            <Item rounded style={{height:30,marginTop:3}}>
            <Label style={{fontSize:12,padding:10,color:'grey'}}>special intructions.....</Label>
          </Item>
          </List>

    </Card.Content>
    
 
  </Card>

  <View style={{flexDirection:'row',justifyContent:"space-around",marginTop:-15}}>
      <View>
<Text>Earning :</Text>
<Text>Start Time :</Text>
<Text>Cooke Time :</Text>
<Text>Delivered :</Text>
      </View>
      <View>
<Text>Rs 1000</Text>
<Text>12:00 PM</Text>
<Text>12:30 PM</Text>
<Text>12:45 PM</Text>
      </View>
  </View>

  <Item regular style={{marginLeft:25,marginRight:25}}>
            <Input placeholder='User Review....' />
          </Item>

          <Button info style={{margin:20,alignSelf:'center',width:200,justifyContent:'center',marginTop:5,backgroundColor:"#03a9fc"}} ><Text style={{color:'white',fontWeight:'bold',textAlign:'center'}}> Submit </Text></Button>
</View>



    )
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  
   marginTop:Constants.statusBarHeight,
  },
});




