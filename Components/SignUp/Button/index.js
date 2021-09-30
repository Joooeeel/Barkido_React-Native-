import React, { useContext } from 'react';
import { Button, Text } from './styled';



export default (props) => {
    return (
        <Button onPress={() => props.click()}>
            <Text>{props.text}</Text>
        </Button>
    )
}