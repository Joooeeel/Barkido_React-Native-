import React, {useState} from 'react';
import {StyleSheet, Image, TouchableOpacity, TextInput, Text} from 'react-native'
import Limit from '../TopLimitScreen'
import GoBack from './GoBack'
import {Container, Title, Body, ViewTitle} from './styled'
import * as ImagePicker from 'expo-image-picker';
import DefImg from '../../assets/Login/png/profile.png';



// //Save user info
// const [userInfo, setUserInfo] = useState({
//     name: '',
//     userName: '',
//     photoUri: ''
// })

// //Save Information User
// const changeInfo = (info, value) => {
//     setUserInfo({ ...userInfo, [info]: value });
//     console.log(userInfo);
// }

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
        setUserInfo({ ...userInfo, photoUri: '' });
    }
}

export default (props)=>{
    return (
        <Container>
            <Limit/>
            <GoBack navigation={props.navigation} />
            <ViewTitle><Title>Edita tu perfil</Title></ViewTitle>

            <Body>
                <TouchableOpacity style={styles.addPhoto}
                        // onPress={openImageAsync}
                    >
                        {/* {userInfo.photoUri == "" ? <Image style={styles.defaultImage} source={DefImg}/> : <Image source={{
                            uri: userInfo.photoUri}} style={styles.uploadedImage}/>
                        } */}

                </TouchableOpacity>

                <TextInput style={styles.enter}
                    placeholder="Nombre"
                    // onChangeText={(e) => changeInfo("name", e)}
                />
                <TextInput style={styles.enter}
                    placeholder="Nombre de Usuario"
                    // onChangeText={(e) => changeInfo("userName", e)}
                />

                <TouchableOpacity style={styles.button} text="Cambiar email">
                    <Text style={styles.text}>Aceptar</Text> 
                </TouchableOpacity>
            </Body>
        </Container>
    )
}


import {Dimensions} from 'react-native'
const heightScreen = Dimensions.get("screen").height
const widthScreen = Dimensions.get("screen").width
const styles = StyleSheet.create({
    defaultImage:{
        width: "50%",
        height: "50%",
    },
    uploadedImage:{
        width: 123,
        height: 123,
        borderRadius: 50,
    },
    addPhoto: {
        width: 123,
        height: 123,
        marginBottom: 33,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    enter: {
        width: widthScreen*0.85,
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 20,
        padding: 5,
        paddingBottom:15,
        alignItems: 'center',
    },
    button: {
        width: 200,
        height: 48,
        backgroundColor: "#ffc500",
        borderRadius:  100,
        padding:10,
        marginTop: 30,
        alignItems: "center",
        justifyContent:"center",
    },
    text:{
        color: "white",
    }
});