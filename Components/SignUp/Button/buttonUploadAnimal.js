import React, { useContext, useState, useEffect } from 'react';
import { Button, Text } from './styled';

import { GlobalContext } from '../../../provider';

//import database from firebase
import { firebase } from '../../../database/firebase';
import { createGlobalStyle } from 'styled-components';
import uuid from 'react-native-uuid';
import { uploadImageAsync } from '../../cloud/uploadphoto';


export default (props) => {

    const [data, setData] = useContext(GlobalContext);

    const addAnimals = async (id) => {
        let idAnimal = "";

        try {
            await firebase
                .firestore()
                .collection('users')
                .doc(id)
                .collection('animals')
                .add({
                    name: props.info.name,
                    breed: props.info.breed,
                    description: props.info.description,
                    sex: props.info.sex,
                    type: props.info.type
                }).then((docRef) => {
                    idAnimal = docRef.id;
                    console.log('document written with ID. ', idAnimal);
                })
        } catch (e) {
            console.log(e);
            alert("Error al actualitzar");
        } finally {
            uploadPhoto(id, idAnimal);
        }
    }

    const uploadPhoto = async (id, animalId) => {
        let uploadUrl = "";
        try {
            if (props.info.photoUri != null || props.info.photoUri != "") {
                uploadUrl = await uploadImageAsync(props.info.photoUri, id);
                setData({ ...data, photoAnimal: uploadUrl });
            }
        } catch (e) {
            console.log(e);
            alert('Upload failed, sorry :(');
        } finally {
            console.log({ uploading: false });
        }

        updateURL(id, uploadUrl, animalId);
    }

    const updateURL = async (id, photoURL, animalId) => {
        const dbRef = firebase
            .firestore()
            .collection('users')
            .doc(id)
            .collection('animals')
            .doc(animalId);

        try {
            dbRef.update({
                photoPortada: photoURL
            });
        } catch (e) {
            console.log(e);
            alert('Updated photoURL error');
            return;
        }
        props.click();
    }
    //data.id ---> 
    return (
        <Button onPress={() => {addAnimals(data.id);
        }}>
            <Text>{props.text}</Text>
        </Button>
    )
}