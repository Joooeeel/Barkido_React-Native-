import React, { useState } from 'react';
import Button from '../Components/SignUp/Button/buttonAuthLogin';
import Input from '../Components/SignUp/Inputs/index';
import { TouchableOpacity, Alert, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, View, Dimensions, ScrollView } from 'react-native';
import Forgot from '../Components/SignUp/Forgotten/index';
import Head from '../Components/Login/Head/index';
import Foot from '../Components/Login/Foot/index';
import { Container, Text, Body, ViewTitle } from '../Components/Login/styled';
import GoBack from '../Components/Menu/TurnBack'
import Limit from '../Components/TopLimitScreen'
import ButtonGoogle from '../Components/Login/Buttons/BtnG';
import InputComponent from '../Components/input';

import { GlobalContext } from '../provider'

//https://pastebin.com/wskeuSgV
const validateEmail = (email) => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
}

export default ({ navigation }) => {


    // const [credentials, setCredentials] = useState({
    //     mail: '',
    //     password: '',
    // });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const changeInfo = (info, value) => {
    //     setCredentials({ ...credentials, [info]: value });
    //     console.log(credentials);
    // }

    const heightScreen = Dimensions.get("screen").height * 0.57

    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>
                    <GoBack navigation={navigation} />
                    <Limit />
                    <Head />
                    <ViewTitle>
                        <Text>¡Te hemos echado de menos!</Text>
                    </ViewTitle>
                    <ScrollView style={{ flex: 1 }}>
                        <Body style={{ height: heightScreen }}>
                            {/*  onPress={()=> console.log("Googleee")} icon={<Icon name="google" type="material-comunity" marginRight={10} size={20} color="#fffff"/>}   */}



                            {/*
                            <TextInput style={styles.enter}
                                placeholder="Correo electrónico"
                                autoCapitalize="none"
                                onChangeText={(e) => changeInfo("mail", e)}
                            />
                            <TextInput style={styles.enter}
                                placeholder="Password"
                                autoCapitalize="none"
                                onChangeText={(e) => changeInfo("password", e)}
                                textContentType='password'
                                secureTextEntry={true}
                                // keyboardType={"visible-password"}
                            /> */}
                            <InputComponent
                                placeHolder={'Correo electrónico'}
                                setValue={setEmail}
                                value={email}
                                isCorrect={validateEmail(email)}
                                errorText='Correo inválido'
                                keyboardType='email-address'
                            />

                            <InputComponent
                                placeHolder={'Contraseña'}
                                setValue={setPassword}
                                value={password}
                                canTextHide={true}
                                isCorrect={password.length >= 6}
                                errorText='Mínimo 6 caracteres'
                            />

                            <Text />
                            {/* <Button 
                                text="ENTRAR" 
                                info={credentials} 
                                click={() => props.navigation.navigate("Bienvenido")} 
                            /> */}
                            <Button
                                text="ENTRAR"
                                info={{
                                    mail: email,
                                    password: password
                                }}
                                navigation={navigation}
                            />

                            <Forgot />
                            {/* <ButtonGoogle text="Entrar con Google" /> */}

                        </Body>
                        <Foot />
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        </Container>
    )
}

const styles = StyleSheet.create({

    enter: {
        width: 360,
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 20,
        padding: 5,
        paddingBottom: 15,
        alignItems: 'center',
        textTransform: 'lowercase',
        backgroundColor: 'lightblue'
    },

})
