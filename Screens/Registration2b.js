import React from 'react';
import styled from 'styled-components/native';
import { Container, View , Text} from '../Components/Login/styled';
import Limit from '../Components/TopLimitScreen'
import Head from '../Components/Login/Head/index';
import Foot from '../Components/Login/Foot/index';
import Image from '../assets/Login/png/entity.png';
import GoBack from '../Components/Menu/TurnBack'
import ButtonOption from '../Components/Login/Buttons/Btn';
import ButtonGoogle from '../Components/Login/Buttons/BtnG';

export default (props) => {
    return (
        <Container>
            <GoBack navigation={props.navigation}/>
            <Limit/>
            <Head />
            <View><Text>Regístrate</Text></View>
            <Body>
                <ImageFront source={Image} />
                <ButtonGoogle text="Regístrate con Google" click={() => props.navigation.navigate("Regístrate")} />
                <Text/>
                <ButtonOption text="Otras opciones de registro" click={() => props.navigation.navigate("Regístrate")} />
            </Body>
            <Foot />
        </Container>
    )
}

export const Body = styled.View`
    padding-top: 60px;
    align-items: center;
    flex: 1;
`

export const ImageFront = styled.Image`
    width:240px;
    height:150px;
    margin-bottom: 65px;
`