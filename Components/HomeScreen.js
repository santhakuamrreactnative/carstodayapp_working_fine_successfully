import React from 'react';
import { SytleSheet, Button, Text, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Favourite from './Favourite';
import MainPage from './MainPage';
import SellCar from './SellCar';
import Account from './Account';



// const Tab = createBottomTabNavigator();



const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      barStyle={{ backgroundColor: '#E74C3C' }}
    >

      <Tab.Screen name="MainPage" component={MainPage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Favourite" component={Favourite}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="SellCar" component={SellCar}
        options={{
          tabBarLabel: 'Sell Car',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Account" component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default HomeScreen;