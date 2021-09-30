import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Platform, Alert, Image, Dimensions, View, ScrollView } from 'react-native';
import { CheckBox, Input, withTheme } from 'react-native-elements';
import ButtonAuth from '../Components/SignUp/Button/buttonAuth';
import Head from '../Components/Login/Head/index';
import Foot from '../Components/Login/Foot/index';
import styled from 'styled-components/native';
import GoBack from '../Components/Menu/TurnBack';
import { Container, ViewTitle, Text, Body } from '../Components/Login/styled';
import Limit from '../Components/TopLimitScreen';


import { GlobalContext } from '../provider'


export default (props) => {

    /*const [data, setData] = useContext(GlobalContext);

    useEffect(() => {
        setData({ ...data, registrerProcess: true })
    }, [])
*/

    const heightScreen = Dimensions.get("screen").height * 0.61;
    const [credentials, setCredentials] = useState({
        mail: "",
        password: "",
        confirmPassword: "",
    });

    const [check, setCheck] = useState(false);

    const changeInfo = (info, value) => {
        setCredentials({ ...credentials, [info]: value });
    }


    //Trazas informacion
    console.log(credentials)
    console.log('checkboton value ---->', check)

    return (
        <Container>
            <GoBack navigation={props.navigation} />
            <Limit />
            <Head />
            <ViewTitle>
                <Text>Regístrate</Text>
            </ViewTitle>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, height: heightScreen, justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={styles.enter}
                        placeholder="Email"
                        onChangeText={(e) => changeInfo("mail", e)}
                        autoCapitalize="none"
                    />
                    <TextInput style={styles.enter}
                        placeholder="Contraseña"
                        onChangeText={(e) => changeInfo("password", e)}
                        textContentType='password'
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <TextInput style={styles.enter}
                        placeholder="Confirmar contraseña"
                        onChangeText={(e) => changeInfo("confirmPassword", e)}
                        textContentType='password'
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <CheckBox
                        title='He leído y acepto los terminos y condiciones del servicio'
                        checked={check}
                        containerStyle={styles.boxCheck}
                        textStyle={{ fontSize: 12, fontWeight: 'normal' }}
                        onPress={() => setCheck(!check)}
                    />
                    <ButtonAuth text="Crea tu cuenta" data={credentials} check={check} click={() => props.navigation.navigate("Háblanos de ti")} />

                </View>
                <Foot />
            </ScrollView>

        </Container>
    )
}


const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        height: Dimensions.get("window").height,
    },
    image: {
        position: 'absolute',
        top: 0,
        width: 1000
    },
    enter: {
        // width: 360,
        width: Dimensions.get("window").width * 0.85,
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 20,
        padding: 5,
        paddingBottom: 15,
        alignItems: 'center',
        // textTransform: 'lowercase',
    },
    boxCheck: {
        width: 260,
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderWidth: 0,
        marginBottom: 20,
    }
})