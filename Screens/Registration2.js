import React from 'react';
import styled from 'styled-components/native';
import { Container, ViewTitle, Text, Body } from '../Components/Login/styled';
import Limit from '../Components/TopLimitScreen'
import Head from '../Components/Login/Head/index';
import Foot from '../Components/Login/Foot/index';
import Image from '../assets/Login/png/user.png';
import GoBack from '../Components/Menu/TurnBack'
import ButtonOption from '../Components/Login/Buttons/Btn';
import ButtonGoogle from '../Components/Login/Buttons/BtnG';


export default (props) => {
    return (
        <Container>
            <GoBack navigation={props.navigation}/>
            <Limit/>
            <Head />
            <ViewTitle><Text>Regístrate</Text></ViewTitle>
            <Body>
                <ImageFront source={Image} />
                <ButtonGoogle text="Regístrate con Google" click={() => props.navigation.navigate("Regístrate")} />                  
                <Text/>
                <ButtonOption text="Otras opciones de registro" click={() => props.navigation.navigate("Regístrate")} />
            </Body>
            <Foot/>
        </Container>
    )
}

export const Body2 = styled.View`
    align-items: center;
    padding-top: 40px;
    flex: 1;
`

export const ImageFront = styled.Image`
    width:190px;
    height:180px;
    margin-bottom: 65px;
`