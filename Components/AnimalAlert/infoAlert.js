
import React, { useState, useEffect, useContext } from 'react'
import { View, ScrollView, Text, StyleSheet, BackHandler, Image, Dimensions, TouchableOpacity } from 'react-native'



import Limit from '../TopLimitScreen'
import GoBack from '../Configuration/GoBack'

import { firebase } from '../../database/firebase';
import { GlobalContext } from '../../provider';
import Laimagen from '../Profile/Resources/golden.jpg'
import { hasStartedLocationUpdatesAsync } from 'expo-location';

export default ({ route, navigation }) => {

    const { itemId, photo, zone, description, name } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Limit />
            <GoBack navigation={navigation} />
            <View style={styles.titleView}><Text style={styles.title}>Animales Perdidos</Text></View>
            <View style={styles.view}>
                <ScrollView style={styles.scrollContainer}>
                    <Image style={styles.image} source={{ uri: photo }} />
                    <View style={styles.textView}>

                         
                        <View style={styles.rowCont}>
                            <Text style={{fontWeight:'bold'}}>{name}</Text>
                            <Text></Text>
                        </View>
                        <View style={styles.rowCont}>
                            <Text>años</Text>
                            <Text></Text>
                        </View>

                        <View style={styles.rowCont}>
                            <Text>zona: {zone}</Text>
                            <Text></Text>
                        </View>
                        <View style={styles.rowCont}>
                            <Text>Día: </Text>
                            <Text></Text>
                        </View>
                        
                        <Text style={{marginTop:20}}>{description}</Text>

                        <TouchableOpacity style={styles.button} 
                            // onPress={()=> nav.navigation.navigate("Info Alert")}
                            onPress={()=>alert("Gracias por contactar!")}
                        >
                            <Text style={{ color: 'white'}}>Contactar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}


export const styles = StyleSheet.create({
    view: {
        flex: 0.9,
        margin: 30,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 10,
    },
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        borderBottomWidth: 2,
        borderColor: '#abd7e3',
    },
    title: {
        fontSize: 22,
        textTransform: 'uppercase',
    },

    image:{
        width:'100%',
        // height:'30%',
        height: Dimensions.get('window').height*0.27,
        alignSelf:'center', 
    },
    scrollContainer:{
        backgroundColor:'#f4f4f6',      
    },
    textView:{
        // backgroundColor:'#f4f4f6',  
        // height: Dimensions.get('window').height*0.8,
        // height: '100%',
        margin: 20,       
    },
    rowCont: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#ffc500',
        borderRadius: 50,
        width: '50%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 40,
        marginTop: 30,
    }
})
