import React, { useContext, useState } from 'react';
import { Button, Text } from './styled';
import { GlobalContext } from '../../../provider';

//import database from firebase
import { firebase } from '../../../database/firebase';
import uuid from 'react-native-uuid';
import { uploadImageAsync } from '../../cloud/uploadphoto';
import { Permissions } from 'expo';
import DefaultImage from '../../../assets/Gatigos.jpg'
export default (props) => {

    const [data, setData] = useContext(GlobalContext);

    const AddNewUser = async () => {

        if (props.info.name === "") {
            alert("Nombre Obligatorio");
        } else if (props.info.userName === "") {
            alert("Nombre de usuario obligatorio");
        } else {
            await firebase
                .firestore()
                .collection('users')
                .doc(data.id)
                .update({
                    name: props.info.name,
                    userName: props.info.userName,
                })
                .then(function (docRef) {
                    //setData({ ...data, id: docRef.id }); ----> BORRAR SI FUNCIONA

                    if (props.info.photoUri == "" || props.info.photoUri == null) {
                        return;
                    } else {
                        uploadPhoto(data.id);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Error al subir el usuario");
                })


            props.click();
        }
    }

    const uploadPhoto = async (id) => {

        let uploadUrl = "";

        try {
            if (props.info.photoUri != null) {
                console.log(data);
                uploadUrl = await uploadImageAsync(props.info.photoUri, id);
                setData({ ...data, photoProfile: uploadUrl, id: id });
            }
            else {
                uploadUrl = await uploadImageAsync(DefaultImage, id);
                setData({ ...data, photoProfile: uploadUrl, id: id });
            }
        } catch (e) {
            console.log(e);
            alert('Upload failed, sorry :(');
        } finally {
            console.log({ uploading: false });
        }

        updateURL(id, uploadUrl);
    }

    const updateURL = async (id, photoURL) => {
        const dbRef = firebase
            .firestore()
            .collection('users')
            .doc(id);

        try {
            dbRef.update({
                photoProfile: photoURL,
            })
        } catch (e) {
            console.log(e);
            alert('Updated photoURL error');
        }
    }


    return (
        <Button onPress={() => AddNewUser()}>
            <Text>{props.text}</Text>
        </Button>
    )
}