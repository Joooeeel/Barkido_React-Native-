import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Login Screens
import Welcome from '../../Screens/Welcome'
import Registration1 from '../../Screens/Registration1';
import RegistrationUser from '../../Screens/Registration2';
import RegistrationEntity from '../../Screens/Registration2b';
import Registration3 from '../../Screens/Registration3';
import SingUp from '../../Screens/Singup';
import AboutYou from '../../Screens/AboutYou';
import AddAnimal from '../../Screens/AddAnimal';
import Done from '../../Screens/Complete';
//Config Screens
import Options from '../Configuration'
import EditProf from '../Configuration/EditProfile'
import OtherOptions from '../Configuration/OtherOptions'
import AboutUs from '../Configuration/AboutUs'
import FQ from '../Configuration/Questions'
import Notifications from '../Configuration/Notifications'
import Privacy from '../Configuration/Privacy'

import BottomNavigation from './bottom-menu'
//Other Screens
import OpenProfile from '../Profile/profOpened';
import CreateAlert from '../AnimalAlert/createAlert';
import InfoAlert from '../AnimalAlert/infoAlert';
import OtherProfile from '../Profile/ProfileOthers/index';

export default () => {

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={false}>
                <Stack.Screen name="Te damos la bienvenida!" component={Welcome} />
                <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
                <Stack.Screen name="Login" component={Registration1} />
                <Stack.Screen name="Login2" component={RegistrationUser} />
                <Stack.Screen name="Login2b" component={RegistrationEntity} />
                <Stack.Screen name="Regístrate" component={Registration3} />
                <Stack.Screen name="Sign Up" component={SingUp} />
                <Stack.Screen name="Háblanos de ti" component={AboutYou} />
                <Stack.Screen name="Háblanos de tu animal" component={AddAnimal} />
                <Stack.Screen name="Bienvenido" component={Done} />

                <Stack.Screen name="Configuration" component={Options} />


                <Stack.Screen name="Notifications Config" component={Notifications} />

                <Stack.Screen name="Edit Own Profile" component={EditProf} />
                <Stack.Screen name="FQ" component={FQ} />
                <Stack.Screen name="About Us" component={AboutUs} />
                <Stack.Screen name="Others Options" component={OtherOptions} />
                <Stack.Screen name="Privacy" component={Privacy} />


                <Stack.Screen name="OtherProfile" component={OtherProfile} />


                <Stack.Screen name="Open Profile" component={OpenProfile} />

                <Stack.Screen name="Create Animal Alert" component={CreateAlert} />
                <Stack.Screen name="Info Alert" component={InfoAlert} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Stack = createStackNavigator();