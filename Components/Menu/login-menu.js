import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../../Screens/Welcome'
import Registration1 from '../../Screens/Registration1';
import RegistrationUser from '../../Screens/Registration2';
import RegistrationEntity from '../../Screens/Registration2b';
import Registration3 from '../../Screens/Registration3';
import SingUp from '../../Screens/Singup';
import AboutYou from '../../Screens/AboutYou';
import AddAnimal from '../../Screens/AddAnimal';
import Done from '../../Screens/Complete';

import OpenProfile from '../Profile/profOpened';
import Profile from '../Profile/profile';

import Menu from '../Menu/bottom-menu';
export default () => {
    //initialRouteName="Háblanos de ti"
 
    return (
        <NavigationContainer>
            <Stack.Navigator  headerMode={false}>
                <Stack.Screen name="Te damos la bienvenida!" component={Welcome} />
                <Stack.Screen name="Login" component={Registration1} />
                <Stack.Screen name="Login2" component={RegistrationUser} />
                <Stack.Screen name="Login2b" component={RegistrationEntity} />
                <Stack.Screen name="Regístrate" component={Registration3} />
                <Stack.Screen name="Sign Up" component={SingUp} title="¡Te hemos hechado de menos!" />
                <Stack.Screen name="Háblanos de ti" component={AboutYou} />
                <Stack.Screen name="Háblanos de tu animal" component={AddAnimal} />
                <Stack.Screen name="Bienvenido" component={Done} />
                <Stack.Screen name="menucito" component={Menu} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Perfil Abierto" component={OpenProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


const Stack = createStackNavigator();