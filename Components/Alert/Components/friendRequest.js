import React from 'react';
import { View, StyleSheet, Dimensions, Text, Button, Image, TouchableOpacity } from 'react-native';

import { firebase } from '../../../database/firebase';
import { GlobalContext } from '../../../provider/index';

import Accept from './resources/accept.png';
import Cancel from './resources/cancel.png';

export default ({ name, photoUser, photoAnimal, userId, requestId }) => {

    const accept = async () => {
        await firebase
            .firestore()
            .collection('users')
            .doc(userId)
            .collection('friends')
            .doc(requestId)
            .set({
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                createdBy: requestId,
            })
            .then(() => {
                addOtherUser();
            })
            .catch(e => {
                console.log('error adding friends', e);
            })
    }

    const cancel = _ => {
        deleteRequest();
    }

    const deleteRequest = async () => {
        await firebase
            .firestore()
            .collection('users')
            .doc(userId)
            .collection('pendingRequest')
            .doc(requestId)
            .delete()
            .then(() => {
                console.log('delete document successfully');
            })
            .catch(e => {
                console.log('error deleting document', e);
            })
    }

    const addOtherUser = async () => {
        await firebase
            .firestore()
            .collection('users')
            .doc(requestId)
            .collection('friends')
            .doc(userId)
            .set({
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                createdBy: userId,
            })
            .then(() => {
                deleteRequest();
            })
            .catch(e => {
                console.log('error adding other user', e);
            })
    }

    return (
        <View style={styles.container}>

            <Image style={styles.photsContainer} source={{ uri: photoAnimal }}></Image>

            <View style={styles.textContainer}>
                {<Text>{name} quiere agregarte como amigo</Text>}
            </View>
            <View style={styles.btnsContainer}>
                <TouchableOpacity style={styles.btns_Request} onPress={cancel}>
                    <Image source={Cancel}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btns_Request} onPress={accept}>
                    <Image source={Accept}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width - 20,
        height: 100,
        display: 'flex',
        flexDirection: 'row'
    },
    photsContainer: {
        width: 100,
        borderRadius: 100
    },
    textContainer: {
        flex: 1,
        width: 175,
        padding: 15,
        alignItems: 'center'
    },
    btnsContainer: {
        padding: 20,
        paddingLeft: 0,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btns_Request: {
        width: 40,
        height: 40,
        //borderRadius: 20,
        //borderColor: '#ffc500',
        //borderWidth: 1.5,
        marginLeft: 10
    }
})