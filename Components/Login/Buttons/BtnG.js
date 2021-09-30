import React from 'react';
import styled from 'styled-components/native';
import GImage from '../../../assets/Login/png/GWhite.png';

export default (props) => {

    return (
        <Button onPress={() => { props.click(); console.log('clickable') }}>
            <Image source={GImage}/>
            <Text>{props.text}</Text>
        </Button>
    )
}

export const Image = styled.Image`
    width: 25px;
    height: 25px;
    margin-right:5px;
`

export const Button = styled.TouchableOpacity`
    width: 200px;
    height: 48px;
    background-color: #ffc500;
    border-radius:  100px;
    padding:10px;
    margin-bottom:20px;
    align-items: center;
    justify-content:center;
    /* display: flex; */
    flex-direction: row;
`
export const Text = styled.Text`
    margin: 3px;
    font-size: 12px;
    color: white;
`