import React, { useContext } from 'react';
import { Button, Text } from './styled';

import { GlobalContext } from '../../../provider';

import firebase from '../../../database/firebase';

export default (props) => {
    const [state, setState] = useContext(GlobalContext);

    const AddNewUser = async () => {
        console.log("22222222222");

        if (props.info.name === "") {
            alert("Nombre Obligatorio");
        } else if (props.info.userName === "") {
            alert("Nombre de usuario obligatorio");
        } else {
            await firebase.db.collection('users').add({
                name: props.info.name,
                userName: props.info.userName,
                description: props.info.description,
                animals: [],

            }).then(function (docRef) {
                setState({ ...state, id: docRef.id });
                setState({ ...state, isLogged: true });
            }).catch(function (error) {
                alert("Error al subir el usuario: " + error);
            })
        }
    }
    return (
        <Button onPress={() => AddNewUser()}>
            <Text>{props.text}</Text>
        </Button>
    )
}