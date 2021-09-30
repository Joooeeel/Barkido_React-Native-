import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import imagenn from '../../assets/barkido.png'
import square from './squareAlert.png'

export default ({ name, sex, zone, day, photo, alertId, description,navigation }) => {
    return (
        <ImageBackground style={styles.container} source={square} resizeMode='contain'>
            <View style={styles.bigContainerA}>
                <View style={styles.imageCont}>
                    <Image source={{ uri: photo }} style={styles.image} />
                </View>
                <Text style={{ fontWeight: 'bold', flex: 0.3 }}>{name}</Text>
            </View>

            <View style={styles.bigContainerB}>
                <View style={styles.rowCont}>
                    <Text style={styles.marginRight}>Sexo:</Text>
                    <Text style={styles.widthText}>{sex}</Text>
                </View>
                <View style={styles.rowCont}>
                    <Text style={styles.marginRight}>Raza:</Text>
                    <Text style={styles.widthText}>pam</Text>
                </View>
                <View style={styles.rowCont}>
                    <Text style={styles.marginRight}>Zona:</Text>
                    <Text style={styles.widthText}>{zone}</Text>
                </View>
                <View style={styles.rowCont}>
                    <Text style={styles.marginRight}>Día:</Text>
                    <Text style={styles.widthText}>bocata de atún</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Info Alert', {
                itemId: alertId,
                photo: photo,
                zone: zone,
                description: description,
                name: name
            })}>
                <Text style={{ color: 'white', margin: 5 }}>Contactar</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#f4f4f6',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        height: 204,
        marginTop: 10,
        marginBottom: 20,
    },
    rowCont: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    bigContainerA: {
        flex: 0.7,
        alignItems: 'center',
        padding: 20,
        paddingRight: 0,
    },
    bigContainerB: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    imageCont: {
        width: 120,
        // height: 5,
        elevation: 10,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 90,
        marginBottom: 10,
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 90,
    },
    marginRight: {
        marginRight: 5,
    },
    widthText: {
        width: '75%',
    },
    button: {
        backgroundColor: '#ffc500',
        borderRadius: 50,
        position: 'absolute',
        top: Platform.OS === 'android' ? '92%' : '88%',
        left: Platform.OS === 'android' ? '65%' : '64%',

        width: 85,
        alignItems: 'center',
    }
})
const WINDOW = 'window';
const {width} = Dimensions.get(WINDOW);
const {height} = Dimensions.get(WINDOW);