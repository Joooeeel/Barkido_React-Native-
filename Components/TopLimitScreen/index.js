import React from 'react'
import {Platform, StatusBar, Text, StyleSheet, SafeAreaView} from 'react-native'

export default () =>
    <SafeAreaView style={style.container}/>


const style = StyleSheet.create({
    container : {
        // position: "absolute",
        backgroundColor: '#f2f2f2',
        // backgroundColor: '#abd7e3',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});