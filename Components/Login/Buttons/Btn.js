import React from 'react';
import styled from 'styled-components/native';


export default (props) => {

    return (
        <Button onPress={() => { props.click(); console.log('clickable') }}>
            <Text>{props.text}</Text>
        </Button>
    )
}

export const Image = styled.Image`
    width: 100%;
    height: 100%;
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
`
export const Text = styled.Text`
    margin: 3px;
    font-size: 12px;
    color: white;
`