import React, {useEffect}from 'react'
import {BackHandler} from 'react-native'
import ComeBack from '../../Components/Profile/Resources/left-arrow.png'
import {View, Image} from './styled'

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
        <View style={styles.goBack} onPress={() => goBack()}>
            <Image source={ComeBack} resizeMode='contain'/>
        </View>
    )
}

import {Platform, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    goBack:{
        position: 'absolute',
        // top: Platform.OS === 'android' ? 65 : 40,
        top: Platform.OS === 'android' ? 25 : 40,
        left: 10,
        width: 30,
        height: 30,
        zIndex: 1,
    }
})