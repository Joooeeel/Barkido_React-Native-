import React, {useEffect}from 'react'
import {BackHandler} from 'react-native'
import ComeBack from '../../../assets/Login/png/leftArrow.png'
import {View, Image} from './styled'

export default ({navigation = undefined})=>{
    const goBack = ()=>{
        if (navigation != undefined)
            navigation.goBack();
        
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', goBack);
        return ()=> {
            BackHandler.removeEventListener('hardwareBackPress', goBack);
        };
    }, []);
    return(
        <View 
            onPress={() => goBack()}
            isUndefined={navigation == undefined}
        >
            <Image source={ComeBack} resizeMode='contain'/>
        </View>
    )
}