import React from 'react';
import { View, StyleSheet, Dimensions, Text, Button, Image, TouchableOpacity } from 'react-native';
import BtnAdd from './Buttons/Btn';

export default ({ isActive, userInfo, animalInfo, myAnimal, navigation }) => {

    return (
        <View style={styles.container}>
            {animalInfo.length > 0 &&
                <TouchableOpacity onPress={() => navigation.navigate('OtherProfile', {
                    userId: userInfo.id,
                })}>
                    <Image style={styles.image} source={{ uri: animalInfo[0].photoPortada }}></Image>
                </TouchableOpacity>}
            <View style={styles.info}>
                <View style={styles.leftInfo}>
                    {animalInfo.length > 0 &&
                        <Text>{animalInfo[0].name}</Text>}
                    <Text>Edad</Text>
                    <BtnAdd text={'Agregar'} id={userInfo.id} animal={myAnimal} />
                </View>
                <View style={{ marginLeft: -80 }}>
                    {userInfo && <Text>{userInfo.userName}</Text>}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width - 50,
        height: 150,
        flex: 1,
        position: 'absolute',
        bottom: 50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        flexDirection: 'row'
    },
    image: {
        width: (Dimensions.get('screen').width - 50) / 3,
        height: 150,
        backgroundColor: '#ff4563',
        borderRadius: 10
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25
    },
    leftInfo: {
        justifyContent: 'space-evenly'
    }
})

