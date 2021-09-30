import React from 'react';
import { Dimensions } from 'react-native';
import { Container, Image, Element } from './styled';
import Fot from '../../../assets/Gatigos.jpg';

export default ( { imageSource , navigation, onPress}) => {
    const width = Dimensions.get('window').width * 0.5;
    const elementWidth = width * 0.92;
    return (
        <Container width={width}>
            <Element 
                width={elementWidth} 
                // onPress={() => navigation.navigate('About Us')}
                onPress={onPress}
                activeOpacity ={1} 
            >
                <Image source={{ uri: imageSource }} />
            </Element>
        </Container>
    )
}