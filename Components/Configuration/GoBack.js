import React, {useEffect}from 'react'
import {BackHandler, StyleSheet, Platform, StatusBar, Image, TouchableOpacity} from 'react-native'
import ComeBack from '../../assets/Login/png/leftArrow.png'

export default (props)=>{
    const goBack = ()=>{
        if (props.navigation != undefined)
            props.navigation.goBack();
        
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', goBack);
        return ()=> {
            BackHandler.removeEventListener('hardwareBackPress', goBack);
        };
    }, []);
    return(
        <TouchableOpacity style={styles.view} onPress={() => goBack()}>
            <Image style={styles.image} source={ComeBack} resizeMode='contain'/>
        </TouchableOpacity>
    )
}

import {Dimensions} from 'react-native'
const heightScreen = Dimensions.get("screen").height
const widthScreen = Dimensions.get("screen").width
const styles = StyleSheet.create({
    view:{
        position: "absolute",
        // top: Platform.OS === 'android' ? heightScreen*0.073 : heightScreen*0.06,
        top: Platform.OS === 'android' ? 65 : 40,
        // top: 65,
        left: 15,
        width: 25,
        height: 25,
        zIndex: 1,
    },
    image:{
        width: "100%",
        height: "100%",
    },
})