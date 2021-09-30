import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



//IMPORT PAGES
import Map from '../Map/index';
import Profile from '../Profile/profile';
import Feed from '../Feed/feed';
import Alert from '../Alert/alert';
import Xat from '../Xat/Xat';
import AnimalAlert from '../AnimalAlert';

// import CogifMenu from './config-menu';

import OtherProfile from '../Profile/ProfileOthers';
import ProfOpened from '../Profile/profOpened';
import Options from '../Configuration'
import EditProf from '../Configuration/EditProfile'
import CreateProf from '../../Screens/Registration3'

export default () => {

  return (
    <Menu.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
    }}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#f2f2f2',
          height: 55
        }
      }}
    >
      <Menu.Screen name="Feed" component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={40} />
          ),
        }}
      />
      <Menu.Screen name="Alert" component={AnimalAlert}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={40} />
          ),
        }} />
      <Menu.Screen name="Home" component={Map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-outline" color={color} size={50} />
          ),
        }} />

      <Menu.Screen name="Xat" component={Alert}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell-outline" color={color} size={40} />
          ),
        }} />
      <Menu.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={40} />
          ),
        }} />
    </Menu.Navigator>
  );
};

const Menu = createBottomTabNavigator();