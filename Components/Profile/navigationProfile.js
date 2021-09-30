import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions, useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';

import ProfileImgPage from './profile1Col'
import ProfileImgPage2Col from './profile'

const Stack = createStackNavigator();
const navigation = useNavigation();


export default  function () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          
          name="profileImgName"
          component={ProfileImgPage2Col}
        />

        <Stack.Screen
          name="profileImgName2"
          component={ProfileImgPage}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};