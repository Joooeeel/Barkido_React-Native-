import React, { useEffect, useContext } from 'react';
import styled from 'styled-components/native';

import { Container, Body } from '../Components/Login/styled';
import Head from '../Components/Login/Head/index';
import Foot from '../Components/Login/Foot/index';
import ImgDog from '../assets/Login/png/dog.png';
import Limit from '../Components/TopLimitScreen'

import { firebase } from '../database/firebase';
import { GlobalContext } from '../provider'


// //In case anyone wants it, you can also make the timer async and await it:

// export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
// Usage:

// // do something
// await delay(500); // wait 0.5 seconds
// // do something else

export default (props) => {

    const [data, setData] = useContext(GlobalContext);

    //console.log('---------------', data.registrerProcess);

    useEffect(() => {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                if (!data.isLogged) {
                    setData({ ...data, id: user.uid, isLogged: true });
                    props.navigation.navigate("BottomNavigation");
                }
            } else {
                console.log('not signed in');
                setTimeout(() => { props.navigation.navigate("Login") }, 4000)
            }
        });
    }, [])


    return (
        <Container>
            <Limit />
            <Head />
            <Body>
                <ImageDog source={ImgDog} resizeMode='stretch' />
                <TextContainer>
                    <Text1>¡Bienvenido a Barkido!</Text1>
                    <Text2> Una aplicación que crea comunidad entre animales y personas y fomenta la adopción para crear nuevas familias </Text2>
                </TextContainer>
                {/* <Button visible={params} click={() => props.navigation.navigate("Login")}/> */}
            </Body>
            <Foot />
        </Container>
    )
}

import { Dimensions } from 'react-native'
const heightScreen = Dimensions.get("screen").height
const widthScreen = Dimensions.get("screen").width

export const ImageDog = styled.Image`
    /* width: ${widthScreen * 0.55};
    height:${heightScreen * 0.23}; */
    width:224.64px;
    height: 202.56px;
`
export const TextContainer = styled.View`
    width: 225px;
    height: 121px;
    justify-content: center;
    margin-top: 25px;
`
export const Text1 = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`
export const Text2 = styled.Text`
    text-align: center
`

