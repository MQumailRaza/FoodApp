import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './screens/intro' 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegisterScreen from './screens/signup'
import LoginScreen from './screens/login'
import HomeScreen from './screens/home';
import  ProfileScreen from './screens/profile'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Root } from "native-base";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import SettingScreen from './screens/setting'
import { Ionicons } from '@expo/vector-icons';
import AccountScreen from './screens/account'

import AccountDetail from './screens/accountDetail'





// const MyAccountTabNavigator =createMaterialBottomTabNavigator({
//   Home: { screen: HomeScreen },
 
//   Setting: { screen: SettingScreen },
//  Account:{screen:AccountScreen},
// }, 
// {
//   initialRouteName: 'Account',
//   activeColor: '#03a9fc',
//   barStyle: { backgroundColor: 'white' },
//   defaultNavigationOptions:({navigation})=>{

// return{

// tabBarIcon:({tintColor})=>{
//  const {routeName}= navigation.state
//  let myicon
//  if(routeName=='Home'){
//    myicon='md-home'
//  }
//  else if (routeName=='Account'){
//    myicon='md-notifications'
//  }
// else if( routeName=='Setting')
// {
//   myicon='md-settings'
// }
//  return <Ionicons name={myicon} size={30} color={tintColor} />
 
// }

// }

//   }
// }
// );









const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },

  Accounts: {
    screen: AccountScreen,
  },
AccountD:{
  screen:AccountDetail,
  navigationOptions: {
    drawerLabel: () => null

},
}

},

{
  hideStatusBar: true,
  drawerBackgroundColor: 'rgba(255,255,255,.9)',
  overlayColor: '#03a9fc',
  contentOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#03a9fc',
  },
}

);





const MyTabNavigator =createMaterialBottomTabNavigator({
  MyHome: { screen: MyDrawerNavigator },
 
  Setting: { screen: SettingScreen },
 Profile:{screen:ProfileScreen},
}, 
{
  initialRouteName: 'MyHome',
  activeColor: '#03a9fc',
  barStyle: { backgroundColor: 'white' },
  defaultNavigationOptions:({navigation})=>{

return{

tabBarIcon:({tintColor})=>{
 const {routeName}= navigation.state
 let myicon
 if(routeName=='MyHome'){
   myicon='md-home'
 }
 else if (routeName=='Profile'){
   myicon='md-person'
 }
else if( routeName=='Setting')
{
  myicon='md-settings'
}
 return <Ionicons name={myicon} size={30} color={tintColor} />
 
}

}

  }
}
);

const AppNavigator = createStackNavigator({
 
  defaultHome: 

{
screen : MyTabNavigator,
navigationOptions:{header:null}

},
  Intro :{


    screen: Screen ,
    navigationOptions: { header: null }
  
  },
  Signup :{

    screen: RegisterScreen,
    navigationOptions :{ header:null }
    
    },
    Login :{

      screen: LoginScreen,
      navigationOptions:{header:null}
      
      },
     
  
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return(
      <Root>
<AppContainer />

</Root>
    ) 
  }
}



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// export default class App extends React.Component{
//   render(){
//     return(
      
//       <Screen />
 
//     )
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
