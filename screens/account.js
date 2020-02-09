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

import { Container, Header, Content, Input, Item ,Left, Body,  Card, CardItem,Right, Button, Icon, Title , List, ListItem,Label, DatePicker  } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Avatar  ,TextInput} from 'react-native-paper';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import constants from 'expo-constants'

export default class AccountScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isReady: false,
          chosenDate: new Date(),
          chosenDate2:new Date()

        };
        this.setDate = this.setDate.bind(this)
        this.setDate2 = this.setDate2.bind(this)
      }


      setDate(newDate) {
          console.log(this.state)
          this.setState({
              chosenDate:newDate
          })
        
      }
      
      setDate2(newDate) {
        console.log(this.state)
        this.setState({
            chosenDate2:newDate
        })
      
    }
      async componentDidMount() {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({ isReady: true });
      }

render(){
    if (!this.state.isReady) {
        return <AppLoading />;
      }
return(
    <View style={styles.container}>
    <Header style={{backgroundColor:'#03a9fc'}}>
      <Left>
        <Button transparent onPress={()=>this.props.navigation.toggleDrawer()}>
          <Icon name='md-menu' />
        </Button>
      </Left>
      <Body style={{alignItems:'center',justifyContent:'center'}}>
        <Title style={{justifyContent:'center'}} >Accounts</Title>
      </Body>
      <Right>
      
      </Right>
    </Header>
 
    <View style={{flexDirection:'row', justifyContent:'center'}}>
        <View style={{flexDirection:'row'}}>
          <DatePicker
            defaultDate={new Date(2020, 1, 1)}
            minimumDate={new Date(2018, 0, 1)}
            maximumDate={new Date(2020, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText=" From"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "grey",fontSize:20 }}
            onDateChange={this.setDate}
            disabled={false}
            style={{color:'red'}}
            />

 <Icon name='calendar' style={{fontSize:20,marginTop:15}} />
</View>
<View style={{flexDirection:'row'}}>
          <DatePicker
            defaultDate={new Date(2020, 1, 1)}
            minimumDate={new Date(2018, 0, 1)}
            maximumDate={new Date(2020, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText=" To"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "grey",fontSize:20 }}
            onDateChange={this.setDate2}
            disabled={false}

            />

 <Icon name='calendar' style={{fontSize:20,marginTop:15}} />
</View>
</View>
           
            
        <Button  style={{backgroundColor:'#03a9fc',width:'50%',justifyContent:'center',alignSelf:'center'}}><Text style={{color:'white',fontWeight:'bold',fontSize:17}}> Search</Text></Button>
        <Content padder>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AccountD')} >
          <Card>
            <CardItem header bordered  style={{justifyContent:'center',backgroundColor:'lightblue'}}>
<Text style={{fontWeight:'bold'}}>{this.state.chosenDate.toDateString()} To {this.state.chosenDate2.toDateString()}</Text>
            </CardItem>
            <CardItem bordered style={{backgroundColor:'skyblue'}}>
              <Body style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text  style={{fontWeight:'bold'}}  >
Total :
                </Text>
                <Text style={{fontWeight:'bold'}} >  
                  5500
                </Text>
              </Body>
            </CardItem>
          
          </Card>
          </TouchableOpacity>
          <Card>
            <CardItem header bordered  style={{justifyContent:'center',backgroundColor:'lightblue'}}>
              <Text style={{fontWeight:'bold'}}>01-01-2020 To 01-09-2020</Text>
            </CardItem>
            <CardItem bordered style={{backgroundColor:'skyblue'}}>
              <Body style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{fontWeight:'bold'}}>
Total :
                </Text>
                <Text style={{fontWeight:'bold'}}>
                  5500
                </Text>
              </Body>
            </CardItem>
          
          </Card>
          <Card>
            <CardItem header bordered  style={{justifyContent:'center',backgroundColor:'lightblue'}}>
              <Text style={{fontWeight:'bold'}}>01-01-2020 To 01-09-2020</Text>
            </CardItem>
            <CardItem bordered style={{backgroundColor:'skyblue'}}>
              <Body style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{fontWeight:'bold'}}>
Total :
                </Text>
                <Text style={{fontWeight:'bold'}}>
                  5500
                </Text>
              </Body>
            </CardItem>
          
          </Card>
          <Title style={{marginTop:15}}><Text style={{color:'black'}}>1,2,3,4</Text></Title>  
          <Title style={{marginTop:15}}><Text style={{color:'black'}}>Current weak</Text></Title>
        </Content>
        
        

  </View>

)

}

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    
     marginTop:constants.statusBarHeight,
    },
  });
  



