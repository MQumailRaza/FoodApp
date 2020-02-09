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

export default class AccountDetail extends React.Component{

    render(){
        return(
            <View>
                <Text>Accoundts</Text>
            </View>
        )
    }
}