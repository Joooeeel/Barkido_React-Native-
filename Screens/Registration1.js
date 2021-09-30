import React from 'react';
// import { Text } from 'react-native';
import styled from 'styled-components/native';
import Limit from '../Components/TopLimitScreen'
import { Container, Body, ViewTitle, Text } from '../Components/Login/styled';
import {ScrollView} from 'react-native'

import ButtonOption from '../Components/Login/Buttons/Btn';
import Head from '../Components/Login/Head/index';
import Foot from '../Components/Login/Foot/index';

import ImageU from '../assets/Login/png/user.png';
import ImageEntity from '../assets/Login/png/entity.png';


import GoBack from '../Components/Menu/TurnBack'


export default (props) => {
    return (
        <Container>
            <Limit/>
            <GoBack />
            <Head />
            <ViewTitle>
                <Text >Crea tu cuenta</Text>
                <Text style={{ fontSize: 14, fontWeight: 'normal'}}>Selecciona tu perfil para empezar</Text>
            </ViewTitle> 
            <ScrollView>
            <Body>            
                <ImageUser source={ImageU} />
                {/* pantalla d'usuari: props.navigation.navigate("Login2")*/}
                <ButtonOption text="Regístrate como usuario" click={() => props.navigation.navigate("Regístrate")} />
                <ImageProtector source={ImageEntity} />
                {/* pantalla d'entitat: props.navigation.navigate("Login2b") */}
                <ButtonOption text="Regístrate como entidad" click={() => props.navigation.navigate("Regístrate")} />
                <Button onPress={() => props.navigation.navigate("Sign Up")} >
                    <TextIn>Ya estoy registrado</TextIn>
                </Button>
            </Body>
            <Foot />
            </ScrollView>
            
        </Container>
    )

}
export const TextIn = styled.Text`
    font-weight: bold;
    font-size: 16px;
`
export const Button = styled.TouchableOpacity`
    width: 200px;
    height: 40px;
    align-items: center;
    justify-content:center;
`
export const ImageUser = styled.Image`
    width:160px;
    height:150px;
    margin-bottom:20px;
    margin-top: 30px;
`
export const ImageProtector = styled.Image`
    width:210px;
    height:130px;
    margin-bottom:20px;
`
