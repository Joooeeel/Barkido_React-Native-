import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import {firebase} from '../../../../database/firebase';

import {GlobalContext} from '../../../../provider/index';

export default ({text, id, animal}) => {

    const [data, setData] = useContext(GlobalContext);

    //-----------------------
    
    const sendPetition = async() =>{
        await firebase
                .firestore()
                .collection('users')
                .doc(id)
                .collection('pendingRequest')
                .doc(data.id)
                .set({
                    createdBy: data.id,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    photo: animal[0].photoPortada,
                    name: animal[0].name,
                })
                .then(() =>{
                    console.log('Document successfully written!')
                })
                .catch((e) => {
                    console.log('Error written a document', e);
                })
    }
    return (
        <Button onPress={() => sendPetition()}>
            <Text>{text}</Text>
        </Button>
    )
}

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`

export const Button = styled.TouchableOpacity`
    width: 120px;
    height: 40px;
    background-color: #ffc500;
    border-radius:  100px;
    padding:10px;
    margin-bottom:20px;
    align-items: center;
    justify-content:center;
`
export const Text = styled.Text`
    margin: 3px;
    font-size: 12px;
    color: white;
`