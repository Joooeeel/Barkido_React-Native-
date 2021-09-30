import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {VerticalContainer, Image, ElementVertical, Text, View} from './verticalStyled';
import Fot from '../../../assets/Gatigos.jpg';
import LikeSpace from '../Resources/whiteSpace.png';
export default ({ imageSource })=> {
    const width = Dimensions.get('window').width * 0.90;
    const height = Dimensions.get('window').height * 0.80;
    const elementWidth = width * 1;
    const elementHeight = height * 0.80;


    const [mainText, setmainText] = useState('Lorem ipsum dolor sit amet consectetur adipiscing elit nam suspendisse justo est elementum, ad natoque fames et maecenas malesuada curabitur ultricies commodo potenti rutrum orci.');


    return (
        <VerticalContainer width={width} height={height}>
            <ElementVertical 
                source={{ uri: imageSource }} 
                width={elementWidth} 
                height={elementHeight}
            >                
                <View source={LikeSpace} width={elementWidth}>   
                    {/* <Image />                       */}
                </View>          
            </ElementVertical>
            <Text>{mainText}</Text>
        </VerticalContainer>
    )
}
// camp de backgroundImage, amb la imatge de likes, com a flex-end.