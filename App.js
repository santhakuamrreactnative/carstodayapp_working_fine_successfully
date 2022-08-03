import React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginPage from './Components/LoginPage';
import Signup from './Components/Signup';
import ForgotPassword from './Components/ForgotPassword'
import HomeScreen from './Components/HomeScreen';
import TestDrives from './Components/TestDrives';
import Notifications from './Components/Notifications';

import ContactAndSupport from './Components/ContactAndSupport';


//below Api json Data showing classes 

import ListViewConcepts from './Components/ListViewConcepts';
import SingleList from './Components/SingleList';
import CustomListView from './Components/CustomListView';
import ArrayListView from './Components/ArrayListView';

import ItemInfoScreen from './Components/ItemInfoScreen';

import SignupDetailScreen from './Components/SignupDetailScreen';

import TestModelShowLocation from './Components/TestModelShowLocation';


//above Api json Data showing classes 



const Stack = createNativeStackNavigator();

export default class App extends React.Component  {

  constructor(props) {
    super(props);
}

  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={LoginPage}  options={{ headerShown: false ,  headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>

          <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>

        <Stack.Screen name="TestDrives" component={TestDrives}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>

          <Stack.Screen name="Notifications" component={Notifications}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>
          <Stack.Screen name="ContactAndSupport" component={ContactAndSupport}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>
          <Stack.Screen name="ListViewConcepts" component={ListViewConcepts}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>
           <Stack.Screen name="SingleList" component={SingleList}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>
            <Stack.Screen name="CustomListView" component={CustomListView}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>
            <Stack.Screen name="ArrayListView" component={ArrayListView}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>

        <Stack.Screen name="ItemInfoScreen" component={ItemInfoScreen}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>

        <Stack.Screen name="SignupDetailScreen" component={SignupDetailScreen}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>

        <Stack.Screen name="TestModelShowLocation" component={TestModelShowLocation}  options={{ headerShown: false , headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',

          },}}/>


            
      </Stack.Navigator>
    </NavigationContainer>
  );

        }
};

