import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Platform, Alert, Image, ScrollView, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import uuid from 'react-native-uuid';
import Head from '../Components/Login/Head/index';
import Foot from '../Components/Login/Foot/index';
import { Container, ViewTitle, Text, Body } from '../Components/Login/styled';
import GoBack from '../Components/Menu/TurnBack';
import Limit from '../Components/TopLimitScreen';

import * as ImagePicker from 'expo-image-picker';
import DefImg from '../assets/Login/png/profile.png';

//Button with firebase functions
import Button from '../Components/SignUp/Button/buttonUpload';
import ButtonLogged from '../Components/SignUp/Button/buttonLogged';

import DefaultImageGat from '../assets/Gatigos.jpg'

export default (props) => {

    //Save user info
    const [userInfo, setUserInfo] = useState({
        name: '',
        userName: '',
        photoUri: ''
    })

    const [selectedImage, setSelectedImage] = useState(null);

    //Save Information User
    const changeInfo = (info, value) => {
        setUserInfo({ ...userInfo, [info]: value });
        console.log(userInfo);
    }

    //Take a photo
    const openImageAsync = async () => {

        console.log('------------------')
        const permision = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permision.granted === false) {
            alert("permission required")
            return;
        }

        const pickResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!pickResult.cancelled) {
            //const uploadUrl = await uploadImageAsync(pickResult.uri);
            setUserInfo({ ...userInfo, photoUri: pickResult.uri });
            setSelectedImage({ localUri: pickResult.uri });
        } else {
            setUserInfo({ ...userInfo, photoUri: DefaultImageGat });
        }
    }


    const heightScreen = Dimensions.get("screen").height*0.61;


    return (
        <Container>
            <GoBack navigation={props.navigation} />
            <Limit />
            <Head />
            <ViewTitle>
                <Text>Háblanos de ti</Text>
            </ViewTitle>

            <ScrollView style={{flex:1}}>
                <View style={{flex:1, height: heightScreen, justifyContent: 'center', alignItems: 'center'}}>

                    <TouchableOpacity style={styles.addPhoto}
                        onPress={openImageAsync}
                    >
                        {userInfo.photoUri == "" ? <DefaultImage source={DefImg}></DefaultImage> : <Image source={{
                            uri: userInfo.photoUri
                        }} style={{ width: 123, height: 123, borderRadius: 50}}></Image>}

                    </TouchableOpacity>
                    <TextInput style={styles.enter}
                        placeholder="Nombre"
                        onChangeText={(e) => changeInfo("name", e)}
                    />
                    <TextInput style={styles.enter}
                        placeholder="Nombre de Usuario"
                        onChangeText={(e) => changeInfo("userName", e)}
                    />

                    <Button text="Añadir animal" click={() => props.navigation.navigate("Háblanos de tu animal")}
                        info={userInfo}
                    />
                    <ButtonLogged text="Aún no tengo animales" info={userInfo} />
                    
                </View>
                <Foot/>
            </ScrollView>
        </Container>
    );
}

export const Text2 = styled.Text`
    text-align: center;
`
export const DefaultImage = styled.Image`
    width:50%;
    height:50%;
`

const styles = StyleSheet.create({

    addPhoto: {
        width: 123,
        height: 123,
        marginBottom: 28,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',

    },
    enter: {
        width: Dimensions.get("screen").width*0.85,
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 20,
        padding: 5,
        paddingBottom: 15,
        alignItems: 'center',
    },
    calendar: {
        width: 182,
        height: 34,
        borderWidth: 1,
        borderColor: '#707070',
        justifyContent: 'center',
        padding: 5
    },
    description: {
        width: 253,
        height: 82,
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 2,
        marginTop: 52,
        padding: 15,
        justifyContent: 'flex-start',
    },
    btns: {
        margin: 0
    }
})
