import React from 'react';
import { Dimensions } from 'react-native';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'

import LikesSpace from '../Resources/whiteSpace.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({ userName, photoProfile, photoPub, id, navigation }) => {

    let statePhoto = {
        liked: false
    }
    const toggleLike = _ => statePhoto.liked = !statePhoto.liked;

    let lastTap = null;



    const handleDoubleTap = _ => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;

        if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
            toggleLike();
            alert(statePhoto.liked);
        } else {
            lastTap = now;
        }
    }

    return (
        <View style={styles.container} >
            <View style={styles.titleContainer}>
                <TouchableOpacity activeOpacity={0.75} onPress={() => navigation.navigate('OtherProfile', {
                    userId: id
                })}>
                    <Image style={styles.userPhoto} source={{ uri: photoProfile }}></Image>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.75} onPress={() => navigation.navigate('OtherProfile', {
                    userId: id
                })}>
                    <Text style={styles.username}>{userName}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerPost}>
                <TouchableOpacity activeOpacity={1} onPress={() => handleDoubleTap()}>
                    <Image style={styles.postPhoto} source={{ uri: photoPub }} ></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.description}>
                <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit nam suspendisse justo est elementum, ad natoque fames et maecenas malesuada curabitur ultricies commodo potenti rutrum orci.</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center'
    },
    titleContainer: {
        width: Dimensions.get('screen').width,
        // height: Dimensions.get('screen').height * 0.047,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    userPhoto: {
        width: 40, height: 40,
        borderRadius: 20,
        backgroundColor: '#000000',
        marginLeft: 16,
    },
    username: {
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 10, marginTop: 5,
    },
    containerPost: {
        width: Dimensions.get('screen').width,
        alignItems: 'center',
    },
    postPhoto: {
        width: Dimensions.get('screen').width * 0.9, height: Dimensions.get('screen').height * 0.5,
        borderRadius: 15,
        backgroundColor: '#000000'
    },
    description: {
        width: Dimensions.get('screen').width * 0.8,
        marginTop: 10,
        justifyContent: 'center',
        marginLeft: 30
    },
    likes: {
        color: '#FFC500',
        fontSize: 20,
    },
    likesContainer: {
        position: 'relative',
        top: 0
    }
})

/*
 <Image source={LikesSpace}>
                   <Text style={styles.likes}></Text>
                   <MaterialCommunityIcons name='heart-outline' size={20}></MaterialCommunityIcons>
               </Image>
*/