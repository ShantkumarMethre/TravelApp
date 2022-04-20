/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {View, SafeAreaView, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './app/screens/Home';
import Details from './app/screens/Details';
import Users from './app/screens/Users';
import Icon from 'react-native-vector-icons/AntDesign';
import FIcons from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  console.disableYellowBox = true;
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'white'}}
      activeColor="#FF6700"
      inactiveColor="grey" 
      >
      <Tab.Screen
        name="Home"
        component={Home}
        options={
          {
          tabBarLabel: null,

          tabBarIcon: tintObject => {
            return (
              <View
                style={{
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  backgroundColor: tintObject.color,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: tintObject.focused ? 0.27 : 0,
                  shadowRadius: 4.65,

                  elevation: tintObject.focused ? 6 : 0,
                }}>
                <Icon
                  name="home"
                  size={18}
                  color={'white'}
                  style={{height: 18, width: 18}}
                />
              </View>
            );
          },
          
        }}
      />
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarLabel: null,
          tabBarIcon: tintObject => (
            <View
              style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: tintObject.color,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: tintObject.focused ? 0.27 : 0,
                shadowRadius: 4.65,

                elevation: tintObject.focused ? 6 : 0,
              }}>
              <FIcons
                name="users"
                size={18}
                color={'#EBECF0'}
                style={{height: 18, width: 18}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Users"
          component={Users}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
