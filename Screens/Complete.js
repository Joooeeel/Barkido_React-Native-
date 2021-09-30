import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import image from '../assets/Login/png/dog.png';
import Limit from '../Components/TopLimitScreen';
import Head from '../Components/Login/Head/index';
import Foot from '../Components/Login/Foot/index';
import { Container, Body } from '../Components/Login/styled'

import Button from '../Components/SignUp/Button/buttonComplete';

import { GlobalContext } from '../provider';

// import Video from 'react-native-video';
import { Video } from 'expo-av';
import Barkido from '../assets/Login/png/BarkidoAnimatSol.mp4'
export default (props) => {
    const [data, setData] = useContext(GlobalContext);

    setTimeout(() => {
        // setData({ ...data, isLogged: true })
        props.navigation.navigate('BottomNavigation');
    }, 2500);

    return (
        <Container >
            <Limit />
            <Head />
            <Body>
                {/* <Image source={image} style={styles.image} /> */}
                <Video
                    source={Barkido}
                    shouldPlay
                    resizeMode="cover"
                    style={{ width: 300, height: 300, borderRadius: 300 }}
                />
                <Text style={{ fontWeight: 'bold', fontSize: 28, marginBottom: 38, }}>¡Genial!</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginBottom: 30, width: 225 }}>¡Ya formas parte de la comunidad de Bark!</Text>
                {/* <Button text="Entrar" /> */}
            </Body>
            <Foot />
        </Container>
    )
}

const styles = StyleSheet.create({

    image: {
        width: '60.5%',
        height: '45%',
        marginTop: 100,
    },

})